import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { routing } from 'app/app.routing';
import { QuizService } from 'app/quiz/quiz.service';
import { QuestionService } from 'app/quiz/question.service';
import { DetailQuizComponent } from 'app/quiz/detail-quiz.component';
import { ReponseService } from 'app/quiz/reponse.service';
import { ReponseComponent } from './quiz/reponse.component';
import { CoursComponent } from './cours/cours.component';
import { CoursService } from 'app/cours/cours.service';
import { SectionComponent } from './cours/section.component';
import { SectionService } from 'app/cours/section.service';
import { SupportCoursService } from 'app/cours/support-cours.service';
import { SupportCoursComponent } from 'app/cours/support-cours.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

import { FileUploadModule } from 'ng2-file-upload';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ListeCoursComponent } from 'app/user/liste-cours/liste-cours.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CoursDetailComponent } from './user/cours-detail/cours-detail.component';
import { DisplaySupportComponent } from './user/display-support/display-support.component';
import { VideoReaderComponent } from './video-reader/video-reader.component';
import { LmsQuizComponent } from './user/lms-quiz/lms-quiz.component';
import { LmsQuizService } from 'app/user/lms-quiz/lms-quiz.service';
import { AppheaderComponent } from 'app/Shared/adminlte/appheader/appheader.component';
import { AsideComponent } from 'app/Shared/adminlte/aside/aside.component';
import { UsersComponent } from 'app/usersmanagm/users.component';
import { UsersmangService } from 'app/usersmanagm/usersmang.service';
import { LoginAdminComponent } from './usersmanagm/loginAdmin/login-admin.component';
import { LoginadminService } from 'app/usersmanagm/loginAdmin/loginadmin.service';
import { UsermlistComponent } from './usersmanagm/user-list/usersm-list/usermlist.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { UsermeditComponent } from './usersmanagm/user-list/usersm-list/usermedit.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeService } from "app/challenge/challenge.service";
import {CountDown} from "ng2-date-countdown";
import { ChallengelistComponent } from './challenge/challengelist.component';
import { ChallengemodifComponent } from './challenge/challengemodif.component';
import { DebdoubComponent } from './challenge/debdoub/debdoub.component';
import { MyNewPipePipe } from './challenge/debdoub/my-new-pipe.pipe';
import { ChartsComponent } from './usersmanagm/charts/charts.component';
import { AuthGuardService } from "app/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    DetailQuizComponent,
    ReponseComponent,
    CoursComponent,
    SectionComponent,
    SupportCoursComponent,
    UploadFileComponent,
    PdfViewerComponent,
    PdfReaderComponent,
    LoginUserComponent,
    ListeCoursComponent,
    FooterComponent,
    HeaderComponent,
    CoursDetailComponent,
    DisplaySupportComponent,
    VideoReaderComponent,
    LmsQuizComponent,
    AppheaderComponent, AsideComponent, UsersComponent, LoginAdminComponent, UsermlistComponent, UsermeditComponent, ChallengeComponent,

CountDown,

ChallengelistComponent,

ChallengemodifComponent,


DebdoubComponent,


MyNewPipePipe,


ChartsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, FileUploadModule,
    routing, ChartsModule, NgbModule.forRoot(), Ng2PaginationModule,
    NgxPaginationModule,
  ],
  providers: [QuizService, QuestionService, ReponseService,
    CoursService, SectionService, SupportCoursService, LmsQuizService, UsersmangService,
    LoginadminService,ChallengeService,
AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
