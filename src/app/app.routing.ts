
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from 'app/quiz/quiz.component';
import { DetailQuizComponent } from 'app/quiz/detail-quiz.component';
import { ReponseComponent } from 'app/quiz/reponse.component';
import { CoursComponent } from 'app/cours/cours.component';
import { SectionComponent } from 'app/cours/section.component';
import { SupportCoursComponent } from 'app/cours/support-cours.component';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { PdfReaderComponent } from 'app/pdf-reader/pdf-reader.component';
import { LoginUserComponent } from 'app/login-user/login-user.component';
import { ListeCoursComponent } from 'app/user/liste-cours/liste-cours.component';
import { CoursDetailComponent } from 'app/user/cours-detail/cours-detail.component';
import { DisplaySupportComponent } from 'app/user/display-support/display-support.component';
import { VideoReaderComponent } from 'app/video-reader/video-reader.component';
import { LmsQuizComponent } from 'app/user/lms-quiz/lms-quiz.component';
import { UsersComponent } from 'app/usersmanagm/users.component';
import { LoginAdminComponent } from "app/usersmanagm/loginAdmin/login-admin.component";
import { UsermlistComponent } from "app/usersmanagm/user-list/usersm-list/usermlist.component";
import { UsermeditComponent } from "app/usersmanagm/user-list/usersm-list/usermedit.component";
import { ChallengeComponent } from "app/challenge/challenge.component";
import { ChallengelistComponent } from "app/challenge/challengelist.component";
import { ChallengemodifComponent } from "app/challenge/challengemodif.component";
import { DebdoubComponent } from "app/challenge/debdoub/debdoub.component";
import { ChartsComponent } from "app/usersmanagm/charts/charts.component";
import { AuthGuardService } from "app/auth-guard.service";


const APP_ROUTES: Routes = [


  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/question/:id', component: DetailQuizComponent },
  { path: 'quiz/question/reponse/:id', component: ReponseComponent },
  //////////////////////////////////////////////////////
  { path: 'cours', component: CoursComponent  , canActivate:[AuthGuardService]},
  { path: 'cours/section/:id', component: SectionComponent   , canActivate:[AuthGuardService] },
  { path: 'cours/section/support/:id', component: SupportCoursComponent  , canActivate:[AuthGuardService] },
  { path: 'upload', component: UploadFileComponent   , canActivate:[AuthGuardService]},
  { path: 'pdf', component: PdfReaderComponent  , canActivate:[AuthGuardService] },
  { path: 'login', component: LoginUserComponent },
  { path: 'usermc', component: UsersComponent   , canActivate:[AuthGuardService]},
   { path: 'userml', component: UsermlistComponent  , canActivate:[AuthGuardService] },
   { path: 'userml/:login', component: UsermeditComponent  , canActivate:[AuthGuardService] },
  
 { path: 'loginadmin', component: LoginAdminComponent },
 { path: 'charts', component: ChartsComponent },






  { path: 'lmscours', component: ListeCoursComponent },
  { path: 'lmscours/:id', component: CoursDetailComponent },
  { path: 'lmscours/display/:id', component: DisplaySupportComponent },
  { path: 'videos', component: VideoReaderComponent },
  { path: 'p', component: LmsQuizComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'challengelist', component: ChallengelistComponent },
    { path: 'challengelist/:id', component: ChallengemodifComponent },
        { path: 'a', component: DebdoubComponent },




];

export const routing = RouterModule.forRoot(APP_ROUTES);


