import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public randomNumber = 100;
  public percentRange = 1;
  public guessNumber;
  public feedback;
  public counterFeedback;
  public feedbackList = [];
  public counter = 0;
  public correct = false;
  submit() {
    const correctAnswer = Math.sqrt(this.randomNumber);
    const guess = Number(this.guessNumber);
    this.counter++;
    if (
      Math.abs(guess - correctAnswer) / correctAnswer <=
      this.percentRange / 100
    ) {
      // answer is close enough.
      this.feedback =
        this.guessNumber +
        ' is close enough! Correct answer is ' +
        correctAnswer;
      this.counterFeedback =
        'You got the answer in ' + this.counter + ' tries!';
      this.feedbackList.push(this.feedback);
      this.feedbackList.push(this.counterFeedback);
      this.correct = !this.correct;
    } else if (guess < correctAnswer) {
      this.feedback = this.guessNumber + ' is too low. Try again.';
      this.feedbackList.push(this.feedback);
    } else {
      // answer is too hight.
      // code
      this.feedback = this.guessNumber + ' is too high. Try again.';
      this.feedbackList.push(this.feedback);
    }
  }
  randomN() {
    this.randomNumber = Math.floor(Math.random() * (250 - 50) + 50);
  }
  reset() {
    this.feedbackList = [];
    this.correct = !this.correct;
    this.guessNumber = null;
    this.counter = 0;
  }
}
