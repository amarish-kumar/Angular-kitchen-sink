import {Injectable} from "@angular/core";

@Injectable()
export default class TodoStatsModel {
    updates = 0;
    deletes = 0;
    reads = 0;
    creates = 0
}