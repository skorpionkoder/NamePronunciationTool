import { Component, Inject } from '@angular/core';
import { INamePronunciation } from './namePronunciation';
import { NamePronunciationService } from './text-to-speech.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html'
})
export class NamePronunciationComponent {
  errorMessage: string = "";

  public NamePronunciation: INamePronunciation = {
    nameText: ""
  };

  constructor(private _TextToSpeechService: NamePronunciationService) {
  }

  getNamePronunciations() {
    this.errorMessage = "";

    // Call the text to speech service
    this._TextToSpeechService.namePronounce(this.NamePronunciation)
      .subscribe((NamePronunciation: INamePronunciation) => {
        let audio = new Audio();
        audio.src = "../../../assets/audio/alarm.wav";
        audio.load();
        audio.play();
        this.NamePronunciation = NamePronunciation
      },
        error => console.error(error));
  }
}
