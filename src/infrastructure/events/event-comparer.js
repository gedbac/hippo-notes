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

export default class EventComparer {

  constructor() {}

  compare(event1, event2) {
    if (!event1 || !event2) {
      throw new Error("Event is null");
    }
    if (event1.id === event2.id) {
      return 0;
    } else if (event1.createdOn > event2.createdOn) {
      return 1;
    } else {
      return -1;
    }
  }

}