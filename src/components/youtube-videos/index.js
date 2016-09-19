import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { YoutubeVideosComponent } from './youtube-videos.component.js';
import playlistEditor from '../playlist-editor';
import InfiniteScroll from 'ng-infinite-scroll';
import SearchFilterPanel from '../search-filter-panel';
import FeedFilter from '../feed-filter';

export * from './youtube-videos.component.js';

export default angular.module('youtube-videos', [
  AppCore,
  'youtube.player',
  uiRouter,
  playlistEditor,
  'infinite-scroll',
  SearchFilterPanel,
  FeedFilter.name
])
  .component(YoutubeVideosComponent.selector, YoutubeVideosComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('videos', {
  //         url: '/videos',
  //         template: '<youtube-videos></youtube-videos>'
  //     });
}
