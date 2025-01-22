
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import TaskTaskManager from "./components/listers/TaskTaskCards"
import TaskTaskDetail from "./components/listers/TaskTaskDetail"

import NotificationNotificationManager from "./components/listers/NotificationNotificationCards"
import NotificationNotificationDetail from "./components/listers/NotificationNotificationDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/tasks/tasks',
                name: 'TaskTaskManager',
                component: TaskTaskManager
            },
            {
                path: '/tasks/tasks/:id',
                name: 'TaskTaskDetail',
                component: TaskTaskDetail
            },

            {
                path: '/notifications/notifications',
                name: 'NotificationNotificationManager',
                component: NotificationNotificationManager
            },
            {
                path: '/notifications/notifications/:id',
                name: 'NotificationNotificationDetail',
                component: NotificationNotificationDetail
            },



    ]
})
