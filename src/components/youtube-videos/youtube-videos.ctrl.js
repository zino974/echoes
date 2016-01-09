export default class YoutubeVideosCtrl {
	/* @ngInject */
	constructor (YoutubePlayerSettings, YoutubeSearch, YoutubeVideoInfo, PlaylistEditorSettings) {
		Object.assign(this, { YoutubePlayerSettings, YoutubeVideoInfo, PlaylistEditorSettings });

		this.queueVideo = YoutubePlayerSettings.queueVideo;
		this.getFeedType = YoutubeSearch.getFeedType;
		this.videos = YoutubeSearch.items;
		this.searchMore = YoutubeSearch.searchMore;

		YoutubeSearch.resetPageToken();
		if (!this.videos.length) {
			YoutubeSearch.search();
		}
	}

	playVideo (video) {
		this.YoutubePlayerSettings.queueVideo(video);
		this.YoutubePlayerSettings.playVideoId(video);
	}

	playPlaylist (playlist) {
		return this.YoutubeVideoInfo.getPlaylist(playlist.id).then(this.YoutubePlayerSettings.playPlaylist);
	}

	addVideo (video) {
		this.PlaylistEditorSettings.add(video);
		this.PlaylistEditorSettings.show();
	}
}