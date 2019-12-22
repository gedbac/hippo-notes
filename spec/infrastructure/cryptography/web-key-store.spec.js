import { expect } from "chai";
import { Logger } from "hippo/infrastructure/logging";
import { ObjectSerializer } from "hippo/infrastructure/util";
import { WebKeyStore, EncryptionService } from "hippo/infrastructure/cryptography";

describe("Web Key Store",  () => {

  it ("should store and load keys from local storage", async () => {
    const password = "Krq5z4ZHFJDeYtv3";
    const secretName = "my";
    const secretValue = "my-secret";
    var keyStore = new WebKeyStore(
      new EncryptionService(
        new ObjectSerializer()
      ),
      new Logger("WebKeyStore")
    );
    keyStore.addSecret(secretName, secretValue);
    await keyStore.store(password);
    var keyStore1 = new WebKeyStore(
      new EncryptionService(
        new ObjectSerializer()
      ),
      new Logger("WebKeyStore")
    );
    await keyStore1.load(password);
    var secretValue1 = await keyStore1.getSecret(secretName);
    expect(secretValue1).to.be.equal(secretValue);
  });

});