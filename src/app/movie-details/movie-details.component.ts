import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import {Movie} from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies : Movie[];
  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(){
    this.adminService.getMoviesList().subscribe(data =>{
      this.movies = data;
    });
  }

}
