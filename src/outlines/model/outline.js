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

import { EventSourcedEntity } from "hippo/infrastructure/model";
import { OutlineAdded, OutlineRemoved, OutlineTextChanged, OutlineNotesChanged, OutlineCompleted, OutlineIncompleted, OutlineTagAdded, OutlineTagRemoved } from "hippo/outlines/events";

export default class Outline extends EventSourcedEntity {

  constructor({ id, aggregateRoot, children = [], text = null, notes = null, completed= false, tags = [] } = {}) {
    super({ id, aggregateRoot });
    this._children = children;
    this._text = text;
    this._notes = notes;
    this._completed = completed;
    this._tags = tags;
    if (this._children) {
      this._children = this._children.map(props => {
        props.aggregateRoot = aggregateRoot;
        return new Outline(props);
      });
    }
  }

  get text() {
    return this._text;
  }

  set text(value) {
    if (this._text !== value) {
      this.raise(new OutlineTextChanged({
        outlineDocumentId: this.aggregateRoot.id,
        outlineId: this.id,
        outlineText: value
      }));
    }
  }

  get notes() {
    return this._notes;
  }

  set notes(value) {
    if (this._notes !== value) {
      this.raise(new OutlineNotesChanged({
        outlineDocumentId: this.aggregateRoot.id,
        outlineId: this.id,
        outlineNotes: value
      }));
    }
  }

  get completed() {
    return this._completed;
  }

  get children() {
    return this._children.slice();
  }

  get tags() {
    return this._tags.slice();
  }

  addOutline(id, text) {
    if (!id) {
      throw new Error("Outline's id is null");
    }
    this.raise(new OutlineAdded({
      outlineDocumentId: this.aggregateRoot.id,
      parentOutlineId: this.id,
      outlineId: id,
      outlineText: text
    }));
  }

  removeOutline(id) {
    if (!id) {
      throw new Error("Outline's id is null");
    }
    this.raise(new OutlineRemoved({
      outlineDocumentId: this.aggregateRoot.id,
      parentOutlineId: this.id,
      outlineId: id
    }));
  }

  complete() {
    if (!this._completed) {
      this.raise(new OutlineCompleted({
        outlineDocumentId: this.aggregateRoot.id,
        outlineId: this.id
      }));
    }
  }

  incomplete() {
    if (this._completed) {
      this.raise(new OutlineIncompleted({
        outlineDocumentId: this.aggregateRoot.id,
        outlineId: this.id
      }));
    }
  }

  addTag(tag) {
    if (!tag) {
      throw new Error("Outline's tag is null");
    }
    if (!this._tags.includes(tag)) {
      this.raise(new OutlineTagAdded({
        outlineDocumentId: this.aggregateRoot.id,
        outlineId: this.id,
        outlineTag: tag
      }));
    }
  }

  removeTag(tag) {
    if (!tag) {
      throw new Error("Outline's tag is null");
    }
    if (this._tags.includes(tag)) {
      this.raise(new OutlineTagRemoved({
        outlineDocumentId: this.aggregateRoot.id,
        outlineId: this.id,
        outlineTag: tag
      }));
    }
  }

  findOutlineBy(id) {
    return this._children.find(x => x.id === id);
  }

  hasOutline(id) {
    return !!this.findOutlineBy(id);
  }

  _onOutlineAdded(event) {
    if (!this.hasOutline(event.outlineId)) {
      this._children.push(new Outline({
        id: event.outlineId,
        aggregateRoot: this.aggregateRoot,
        text: event.outlineText
      }));
    }
  }

  _onOutlineRemoved(event) {
    var outline = this.findOutlineBy(event.outlineId);
    if (outline) {
      var index = this._children.indexOf(outline);
      if (index !== -1) {
        this._children.splice(index, 1);
      }
    }
  }

  _onOutlineTextChanged(event) {
    this._text = event.outlineText;
  }

  _onOutlineNotesChanged(event) {
    this._notes = event.outlineNotes;
  }

  _onOutlineCompleted(event) {
    this._completed = true;
  }

  _onOutlineIncompleted(event) {
    this._completed = false;
  }

  _onOutlineTagAdded(event) {
    if (!this._tags.includes(event.outlineTag)) {
      this._tags.push(event.outlineTag);
    }
  }

  _onOutlineTagRemoved(event) {
    if (this._tags.includes(event.outlineTag)) {
      var index = this._tags.indexOf(event.outlineTag);
      if (index !== -1) {
        this._tags.splice(index, 1);
      }
    }
  }

}