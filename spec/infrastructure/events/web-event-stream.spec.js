import { expect } from "chai";
import { ObjectSerializer } from "hippo/infrastructure/util";
import { Event, WebEventStream } from "hippo/infrastructure/events";
import { IndexedDatabase } from "hippo/infrastructure/data";

class Foo extends Event {

  constructor({ id, createdOn } = {}) {
    super({ id, createdOn });
  }

}

describe("Web Event Stream", () => {

  afterEach(async () => {
    await IndexedDatabase.deleteDatabase("event-store");
  });

  it("should write and read event from stream", async () => {
    var stream1 = new WebEventStream(
      "foo",
      "event-store",
      new ObjectSerializer([[ "Foo", Foo ]])
    );
    await stream1.open();
    await stream1.write(new Foo({ id: 1, createdOn: 1000 }));
    await stream1.write(new Foo({ id: 2, createdOn: 1001 }));
    await stream1.write(new Foo({ id: 3, createdOn: 1002 }));
    await stream1.close();
    var stream2 = new WebEventStream(
      "foo",
      "event-store",
      new ObjectSerializer([[ "Foo", Foo ]])
    );
    await stream2.open();
    var index = 1;
    var event = await stream2.read();
    while (event) {
      expect(event.id).to.be.equal(index);
      index++;
      event = await stream2.read();
    }
    await stream2.close();
    expect(index).to.be.equal(4);
    expect(stream2.length).to.be.equal(3);
    expect(stream2.position).to.be.equal(3);
  });

});