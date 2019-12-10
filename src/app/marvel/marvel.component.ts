import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  characters:any = [];
  element: any = [];
  private content: string;
  public query: string;
  constructor(private readonly marvelService: MarvelService) { 
     
  }

  ngOnInit() {
    this.marvelService.getMarvelCharacters().subscribe((res) => {
       
      this.characters = res.data.results;
      console.log(res);
    })


  }
  getSelectedChar(id,description) {
      this.marvelService.getheroByNae(id).subscribe((res) => {
        this.element = res.data.results;

         this.content = description
           console.log(this.content)
        
    
   });
  }
  



}
