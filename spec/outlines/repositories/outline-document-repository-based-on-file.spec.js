import { expect } from "chai";
import { fileExists, writeFile, ObjectSerializer } from "hippo/infrastructure/util";
import { Logger } from "hippo/infrastructure/logging";
import { FileEventStore } from "hippo/infrastructure/events";
import { OutlineDocument } from "hippo/outlines/model";
import { OutlineDocumentFactory } from "hippo/outlines/factories";
import { OutlineDocumentRepository } from "hippo/outlines/repositories";
import { OutlineDocumentCreated, OutlineDocumentTitleChanged } from "hippo/outlines/events";

describe("Outline Document Repository", () => {

  it("should save outline document", async () => {
    var factory = new OutlineDocumentFactory();
    var document = factory.create();
    var eventStore = new FileEventStore(
      "./",
      new ObjectSerializer([
        [ "OutlineDocument", OutlineDocument ],
        [ "OutlineDocumentCreated", OutlineDocumentCreated ]
      ]),
      new Logger("FileEventStore")
    );
    await eventStore.open();
    var repository = new OutlineDocumentRepository(
      eventStore,
      new Logger("OutlineDocumentRepository")
    );
    await repository.save(document);
    await eventStore.close();
    var streamName = `${OutlineDocument.name}::${document.id}`;
    expect(await fileExists(`./streams/${streamName}`)).to.be.true;
  });

  it("should read outline document", async () => {
    var id = "ba7d6c18-26a6-4492-85b7-a6ac02659f7e";
    var streamName = `${OutlineDocument.name}::${id}`;
    await writeFile(`./streams/${streamName}`, { flag: "w", encoding: "utf8" },
      "{" +
      "\"id\":\"52d88c34-84cf-406a-8f31-185c819f6b0f\"," +
      "\"_t\":\"OutlineDocumentCreated\"," +
      "\"timestamp\":1514371604655," +
      "\"outlineDocumentId\":\"ba7d6c18-26a6-4492-85b7-a6ac02659f7e\"" +
      "}");
    var eventStore = new FileEventStore(
      "./",
      new ObjectSerializer([
        [ "OutlineDocument", OutlineDocument ],
        [ "OutlineDocumentCreated", OutlineDocumentCreated ]
      ]),
      new Logger("FileEventStore")
    );
    await eventStore.open();
    var repository = new OutlineDocumentRepository(
      eventStore,
      new Logger("OutlineDocumentRepository")
    );
    var document = await repository.findBy(id);
    await eventStore.close();
    expect(document).to.be.not.null;
    expect(document.id).to.be.equal(id);
  });

  it("should update outline document", async () => {
    var id = "995c6eb4-a049-4a04-8201-91a0a146be4a";
    var streamName = `${OutlineDocument.name}::${id}`;
    await writeFile(`./streams/${streamName}`, { flag: "w", encoding: "utf8" },
      "{" +
      "\"id\":\"52d88c34-84cf-406a-8f31-185c819f6b0f\"," +
      "\"_t\":\"OutlineDocumentCreated\"," +
      "\"timestamp\":1514371604655," +
      "\"outlineDocumentId\":\"995c6eb4-a049-4a04-8201-91a0a146be4a\"" +
      "}");
    var eventStore = new FileEventStore(
      "./",
      new ObjectSerializer([
        [ "OutlineDocument", OutlineDocument ],
        [ "OutlineDocumentCreated", OutlineDocumentCreated ],
        [ "OutlineDocumentTitleChanged", OutlineDocumentTitleChanged ]
      ]),
      new Logger("FileEventStore")
    );
    await eventStore.open();
    var repository = new OutlineDocumentRepository(
      eventStore,
      new Logger("OutlineDocumentRepository")
    );
    var document = await repository.findBy(id);
    document.title = "My Document";
    await repository.update(document);
    var updatedDocument = await repository.findBy(id);
    await eventStore.close();
    expect(updatedDocument.title).to.be.equal("My Document");
  });

  it("should delete outline document", async () => {
    var id = "52c049de-6991-4e30-82b7-1fd353685d3f";
    var streamName = `${OutlineDocument.name}::${id}`;
    await writeFile(`./streams/${streamName}`, { flag: "w", encoding: "utf8" },
      "{" +
      "\"id\":\"52d88c34-84cf-406a-8f31-185c819f6b0f\"," +
      "\"_t\":\"OutlineDocumentCreated\"," +
      "\"timestamp\":1514371604655," +
      "\"outlineDocumentId\":\"52c049de-6991-4e30-82b7-1fd353685d3f\"" +
      "}");
    var eventStore = new FileEventStore(
      "./",
      new ObjectSerializer([
        [ "OutlineDocument", OutlineDocument ],
        [ "OutlineDocumentCreated", OutlineDocumentCreated ]
      ]),
      new Logger("FileEventStore")
    );
    await eventStore.open();
    var repository = new OutlineDocumentRepository(
      eventStore,
      new Logger("OutlineDocumentRepository")
    );
    await repository.delete(id);
    await eventStore.close();
    expect(await fileExists(`./dist/${streamName}`)).to.be.false;
  });

});