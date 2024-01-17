import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  //Student/Veteran Section Start
  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/student/profile/profile.module').then(
            (m) => m.StudentProfileModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/student/dashboard/dashboard.module').then(
            (m) => m.StudentDashboardModule
          ),
      },
      {
        path: 'education',
        loadChildren: () =>
          import('./features/student/education/education.module').then(
            (m) => m.StudentEducationModule
          ),
      },
      {
        path: 'employment',
        loadChildren: () =>
          import('./features/student/employment/employment.module').then(
            (m) => m.StudentEmploymentModule
          ),
      },
      {
        path: 'benefits',
        loadChildren: () =>
          import('./features/student/benefits/benefits.module').then(
            (m) => m.StudentBenefitsModule
          ),
      },
      {
        path: 'discounts',
        loadChildren: () =>
          import('./features/student/discounts/discounts.module').then(
            (m) => m.StudentDiscountModule
          ),
      },
      {
        path: 'inbox',
        loadChildren: () =>
          import('./features/student/inbox/inbox.module').then(
            (m) => m.StudentInboxModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/student/settings/settings.module').then(
            (m) => m.StudentSettingsModule
          ),
      },
    ],
  },
  //Student/Veteran Section End
  //College Admin Section Start
  {
    path: 'college',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'profile/overview', pathMatch: 'full' },
      {
        path: 'reports/activity',
        loadChildren: () =>
          import(
            './features/college-admin/reports/activity-report/activity-report.module'
          ).then((m) => m.ActivityReportModule),
      },
      {
        path: 'reports/school-data',
        loadChildren: () =>
          import(
            './features/college-admin/reports/school-data/school-data.module'
          ).then((m) => m.SchoolDataModule),
      },
      {
        path: 'reports/campaigns',
        loadChildren: () =>
          import(
            './features/college-admin/reports/campaigns/campaigns.module'
          ).then((m) => m.CampaignsModule),
      },
      {
        path: 'reports/paid-vs-non-paid',
        loadChildren: () =>
          import(
            './features/college-admin/reports/non-paid-v-campaigns/non-paid-v-campaigns.module'
          ).then((m) => m.NonPaidVCampaignsModule),
      },
      {
        path: 'reports/platform-data',
        loadChildren: () =>
          import(
            './features/college-admin/reports/platform-data/platform-data.module'
          ).then((m) => m.PlatformDataModule),
      },

      {
        path: 'inbox',
        loadChildren: () =>
          import('./features/college-admin/inbox/inbox.module').then(
            (m) => m.AdminInboxModule
          ),
      },
      {
        path: 'profile/overview',
        loadChildren: () =>
          import(
            './features/college-admin/profile/overview/overview.module'
          ).then((m) => m.AdminOverviewModule),
      },
      {
        path: 'profile/military',
        loadChildren: () =>
          import(
            './features/college-admin/profile/military/military.module'
          ).then((m) => m.AdminMilitaryModule),
      },
      {
        path: 'profile/yellow-ribbon',
        loadChildren: () =>
          import(
            './features/college-admin/profile/yellow-ribbon-program/yellow-ribbon-program.module'
          ).then((m) => m.AdminYellowRibbonProgramModule),
      },
      {
        path: 'profile/stats',
        loadChildren: () =>
          import('./features/college-admin/profile/stats/stats.module').then(
            (m) => m.AdminStatsModule
          ),
      },
      {
        path: 'profile/degrees',
        loadChildren: () =>
          import(
            './features/college-admin/profile/degrees/degrees.module'
          ).then((m) => m.AdminDegreesModule),
      },
      {
        path: 'profile/contact',
        loadChildren: () =>
          import(
            './features/college-admin/profile/contact/contact.module'
          ).then((m) => m.AdminContactModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/college-admin/settings/settings.module').then(
            (m) => m.AdminSettingsModule
          ),
      },
    ],
  },
  //College Admin Section End
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./features/auth/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./features/auth/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: ':college-alias',
        loadChildren: () =>
          import('./features/college-detail/college-detail.modules').then(
            (m) => m.CollegeDetailModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.modules').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
