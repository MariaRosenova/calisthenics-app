import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ProgramItem } from 'src/app/types/programItem';
import { WorkoutPlans } from 'src/app/types/workout-plan';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  techniques: ProgramItem[] | null = [];
  workoutPlans: WorkoutPlans[] | null = [];
  goalPlan: ProgramItem[] | null = [];
  
  constructor(private api: ApiService, private userService: UserService, private router: Router) { }


  getWorkoutGoalPrograms(goal: string) {
    this.api.getWorkoutGoalPrograms(goal).subscribe((program) => {
      console.log(program)
    })
  }



  //взимаме всички техники - втора част
  //взимаме абсолютно всички тренировки

  ngOnInit(): void {

    this.goalPlan = [
      { title: 'Fat Burning', description: 'Beginner', imgUrl: '../../../assets/workout-comp.jpg' , _id: '6617e72322bc5527eda437d7' },
      { title: 'Fat Burning', description: 'Intermediate', imgUrl: '../../../assets/workout-comp.jpg', _id: '6618204a551b606b582d2a19' },
      { title: 'Fat Burning', description: 'Advanced', imgUrl: '../../../assets/workout-comp.jpg', _id: '66182072551b606b582d2a1c' }
  ];

    this.techniques = [
      {title: 'Bar Dips', imgUrl: ''},
      {title: 'L-Sit Hold', imgUrl: ''},
      {title: 'Jumping Muscle', imgUrl: ''}
    ]
  
    const goal = 'Fat burning';

    this.getWorkoutGoalPrograms(goal);
  }

  navigateToWorkout(id: string | undefined): void {
    // Navigate to the workout route with the selected program's ID
    this.router.navigate(['/training', id]);
  }

  // ngOnInit(): void {  
  //   this.api.getWorkoutPlans().subscribe((workoutPlan) => {
  //     console.log(workoutPlan);
  //   })
  // }


  //     programs:{} = [
  //     { title: 'Build strength' },
  //     { description: 'The best shape in your life' },
  //     { imgUrl: '../../../assets/workout-comp.jpg' }
  // ];


}
