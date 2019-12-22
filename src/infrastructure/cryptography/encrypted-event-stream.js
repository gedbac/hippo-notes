/*
 *  Hippo Notes
 *
 *  Copyright (C) 2016 - 2020 The Hippo Notes Authors
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { EventStream } from "hippo/infrastructure/events";
import { EncryptedEvent } from "hippo/infrastructure/cryptography";

export default class EnryptedEventStream extends EventStream {

  constructor(stream, privateKey, encryptionService) {
    super();
    this._stream = stream;
    if (!this._stream) {
      throw new Error("Event stream is null");
    }
    this._privateKey = privateKey;
    if (!this._privateKey) {
      throw new Error("Private key is null");
    }
    this._encryptionService = encryptionService;
    if (!this._encryptionService) {
      throw new Error("Encryption service is null");
    }
  }

  get name() {
    return this._stream.name;
  }

  get position() {
    return this._stream.position;
  }

  set position(value) {
    this._stream.position = value;
  }

  get length() {
    return this._stream.length;
  }

  get closed() {
    return this._stream.closed;
  }

  async open() {
    await this._stream.open();
  }

  async close() {
    await this._stream.close();
  }

  async read() {
    var event = null;
    var props = await this._stream.read();
    if (props) {
      var encryptedEvent = new EncryptedEvent(props);
      if (encryptedEvent) {
        event = await this._encryptionService.decrypt(encryptedEvent.chippertext, encryptedEvent.iv, this._privateKey);
      }
    }
    return event;
  }

  async write(event) {
    if (!event) {
      throw new Error("Event is null");
    }
    var { chippertext, iv } = await this._encryptionService.encrypt(event, this._privateKey);
    var encryptedEvent = new EncryptedEvent({
      id: event.id,
      createdOn: event.createdOn,
      chippertext: chippertext,
      iv: iv
    });
    await this._stream.write(encryptedEvent);
  }

}