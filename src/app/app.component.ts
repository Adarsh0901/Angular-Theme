import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface Theme {
  themeName: string;
  values: ColorCodeValue;
}

interface ColorCodeValue {
  [variableName: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-css';
  themes?: Theme[];
  selectedTheme?: string;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getAllThemes();
  }

  getThemeFromLocalstorage() {
    this.selectedTheme = localStorage.getItem('Theme') || 'RemigesStandard';
    this.changeTheme();
  }

  setThemeTOLocalstorage() {
    if (!this.selectedTheme) {
      return;
    }

    localStorage.setItem('Theme', this.selectedTheme);
  }

  setTheme(data: Theme): void {
    this._http.post(environment.baseUrl, data).subscribe((res: any) => {
      this.getAllThemes();
    });
  }

  getAllThemes(): void {
    this._http.get(environment.baseUrl).subscribe((res: any) => {
      this.themes = res;
      this.getThemeFromLocalstorage();
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.readFileContent(file);
    }
  }

  readFileContent(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const fileContent = e.target.result;
      const parsedContent = JSON.parse(fileContent);
      this.setTheme(parsedContent);
    };

    reader.readAsText(file);
  }

  changeTheme(): void {
    const theme = this.themes?.find((theme: Theme) => {
      return theme.themeName == this.selectedTheme;
    });

    if (!theme) {
      return;
    }

    this.setThemeTOLocalstorage();

    Object.entries(theme.values).forEach(([key, value]: any) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
}
