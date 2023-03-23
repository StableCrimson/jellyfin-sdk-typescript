/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { ImageApi } from '../../generated-client/api/image-api';

export function getImageApi(api: Api): ImageApi {
	return new ImageApi(api.configuration, undefined, api.axiosInstance);
}
