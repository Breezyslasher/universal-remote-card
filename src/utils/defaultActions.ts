import { IElementConfig, Platform } from '../models/interfaces';
import {
	androidTVDefaultKeys,
	androidTVDefaultSources,
	appleTVDefaultKeys,
	appleTVDefaultSources,
	braviaTVDefaultKeys,
	braviaTVDefaultSources,
	fireTVDefaultKeys,
	fireTVDefaultSources,
	genericIRRFDefaultKeys,
	genericIRRFDefaultSources,
	jellyfinDefaultSources,
	jellyfinTVDefaultKeys,
	kodiDefaultKeys,
	kodiDefaultSources,
	philipsTVDefaultKeys,
	philipsTVDefaultSources,
	rokuDefaultKeys,
	rokuDefaultSources,
	samsungTVDefaultKeys,
	samsungTVDefaultSources,
	unifiedRemoteDefaultKeys,
	unifiedRemoteDefaultSources,
	webosDefaultKeys,
	webosDefaultSources,
} from '../models/maps';

export function getDefaultActions(platform: Platform) {
	let defaultKeys: IElementConfig[];
	let defaultSources: IElementConfig[];
	switch (platform) {
		case 'Generic IR/RF':
			defaultKeys = genericIRRFDefaultKeys;
			defaultSources = genericIRRFDefaultSources;
		case 'Unified Remote':
			defaultKeys = unifiedRemoteDefaultKeys;
			defaultSources = unifiedRemoteDefaultSources;
			break;
		case 'LG webOS':
			defaultKeys = webosDefaultKeys;
			defaultSources = webosDefaultSources;
			break;
		case 'Samsung TV':
			defaultKeys = samsungTVDefaultKeys;
			defaultSources = samsungTVDefaultSources;
			break;
		case 'Philips TV':
			defaultKeys = philipsTVDefaultKeys;
			defaultSources = philipsTVDefaultSources;
			break;
		case 'Jellyfin':
			defaultKeys = jellyfinTVDefaultKeys;
			defaultSources = jellyfinDefaultSources;
			break;
		case 'Kodi':
			defaultKeys = kodiDefaultKeys;
			defaultSources = kodiDefaultSources;
			break;
		case 'Roku':
			defaultKeys = rokuDefaultKeys;
			defaultSources = rokuDefaultSources;
			break;
		case 'Apple TV':
			defaultKeys = appleTVDefaultKeys;
			defaultSources = appleTVDefaultSources;
			break;
		case 'Fire TV':
			defaultKeys = fireTVDefaultKeys;
			defaultSources = fireTVDefaultSources;
			break;
		case 'Sony BRAVIA':
			defaultKeys = braviaTVDefaultKeys;
			defaultSources = braviaTVDefaultSources;
			break;
		case 'Android TV':
		default:
			defaultKeys = androidTVDefaultKeys;
			defaultSources = androidTVDefaultSources;
			break;
	}
	return [structuredClone(defaultKeys), structuredClone(defaultSources)];
}
