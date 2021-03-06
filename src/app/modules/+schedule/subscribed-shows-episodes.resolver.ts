import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { LocalStorage } from '../shared/local-storage.provider';
import { TVMaze } from '../shared/tv-maze.provider';
import { Show, Episode, ShowWithEpisodes } from '../../interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class SubscribedShowsEpisodesResolver
  implements Resolve<ShowWithEpisodes[]> {
  subscribedShows: Show[];

  constructor(private localStorage: LocalStorage, private tvMaze: TVMaze) {
    this.subscribedShows = localStorage.getItem('subscribedShows', []);
  }

  resolve(): Observable<ShowWithEpisodes[]> {
    const episodeRequests: Array<
      Observable<ShowWithEpisodes>
    > = this.subscribedShows.map((show: Show) => {
      return this.tvMaze.getEpisodes(show.id).pipe(
        map((episodes: Episode[]): ShowWithEpisodes => {
          return { episodes, show };
        })
      );
    });

    return forkJoin(episodeRequests);
  }
}
