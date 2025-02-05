/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { initTestDb, sendEnvResetRequest } from './utils.js';

export const setup = async () => {
	await initTestDb(false);
	await sendEnvResetRequest();
};
