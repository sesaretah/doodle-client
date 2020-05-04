import HomePage from './containers/layouts/HomePage.jsx';
import NotFoundPage from './containers/layouts/NotFoundPage';
import PanelRightPage from './containers/layouts/PanelRightPage';



import RoleShow from './components/roles/show';
import RoleIndex from './components/roles/index';
import RoleCreate from './components/roles/create';
import RoleUpdate from './components/roles/update';

import CourseShow from './components/courses/show';
import CourseIndex from './components/courses/index';
import CourseCreate from './components/courses/create';
import CourseUpdate from './components/courses/update';
import CourseCanvas from './containers/courses/canvas';

import DiscussionShow from './components/discussions/show';
import DiscussionIndex from './components/discussions/index';
import DiscussionCreate from './components/discussions/create';
import DiscussionUpdate from './components/discussions/update';

import ExamShow from './components/exams/show';
import ExamIndex from './components/exams/index';
import ExamCreate from './components/exams/create';
import ExamUpdate from './components/exams/update';

import ProfileShow from './components/profiles/show';
import ProfileIndex from './components/profiles/index';
import ProfileCreate from './components/profiles/create';
import ProfileUpdate from './components/profiles/update';


import Login from './components/users/Login';
import SignUp from './components/users/SignUp';



export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/sign_up/',
    component: SignUp,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },


  {
    path: '/roles/',
    component: RoleIndex,
  },
  {
    path: '/roles/:roleId/edit',
    component: RoleUpdate,
  },
  {
    path: '/roles/new',
    component: RoleCreate,
  },
  {
    path: '/roles/:roleId',
    component: RoleShow,
  },

  {
    path: '/courses/canvas',
    component: CourseCanvas,
  },
  {
    path: '/courses/',
    component: CourseIndex,
  },
  {
    path: '/courses/:courseId/edit',
    component: CourseUpdate,
  },
  {
    path: '/courses/new',
    component: CourseCreate,
  },
  {
    path: '/courses/:courseId',
    component: CourseShow,
  },

  {
    path: '/discussions/',
    component: DiscussionIndex,
  },
  {
    path: '/discussions/:courseId/edit',
    component: DiscussionUpdate,
  },
  {
    path: '/discussions/new',
    component: DiscussionCreate,
  },
  {
    path: '/discussions/:discussionId',
    component: DiscussionShow,
  },

  {
    path: '/exams/',
    component: ExamIndex,
  },
  {
    path: '/exams/:examId/edit',
    component: ExamUpdate,
  },
  {
    path: '/exams/new',
    component: ExamCreate,
  },
  {
    path: '/exams/:examId',
    component: ExamShow,
  },

  {
    path: '/profiles/',
    component: ProfileIndex,
  },
  {
    path: '/profiles/:profileId/edit',
    component: ProfileUpdate,
  },
  {
    path: '/profiles/new',
    component: ProfileCreate,
  },
  {
    path: '/profiles/:profileId',
    component: ProfileShow,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
