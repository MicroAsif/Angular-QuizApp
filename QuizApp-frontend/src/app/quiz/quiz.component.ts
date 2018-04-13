import { QuizService } from './../shared/quiz.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private Qs: any[];
  constructor(private router: Router,  private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;
    this.quizService.getQuestions().subscribe(
      (data: any) => {
        this.quizService.qus = data;
        this.Qs = data;

        console.log(data);
        this.startTimer();
      }
    );
  }
  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }

  Answer(qID, choice) {

  }

}
