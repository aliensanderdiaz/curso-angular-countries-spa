import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor(
    private countriesService: CountriesService
  ) {}

  searchByCapital( term: string ): void {
    console.info('Desde ByCapitalPage')
    console.log({ term })
    this.countriesService.getCapital( term )
      .subscribe({
        next: (response) => {
          console.log({response})
          this.countries = response
        }
      })
  }
}
