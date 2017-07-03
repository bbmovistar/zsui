const menuList = [
    {
        "isPermissions": true,
        "privilegeKey": "schoolManage",
        "privilegeName": "学校管理",
        "routerName": "schoolManage",
        "icon": 'icon-success',
        "items": [
            {
                "isPermissions": true,
                "privilegeKey": "schoolManage-departmentsMassage",
                "privilegeName": "院系管理",
                "routerName": "departmentsMassage",
                "items": []
            },
            {
                "isPermissions": true,
                "privilegeKey": "schoolManage-gradeMassage",
                "privilegeName": "年级管理",
                "routerName": "gradeMassage",
                "items": []
            }
        ]
    },
    {
        "isPermissions": true,
        "privilegeKey": "classManage",
        "privilegeName": "班级管理",
        "routerName": "classManage",
        "items": [
            {
                "isPermissions": true,
                "privilegeKey": "classManage-classMassage",
                "privilegeName": "班级信息",
                "routerName": "classMassage",
                "items": []
            }
        ]
    },
    {
        "isPermissions": true,
        "items": [
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "teacherManage-teachersInformation",
                "privilegeName": "教师信息",
                "routerName": "teachersInformation"
            }
        ],
        "privilegeKey": "teacherManage",
        "privilegeName": "教师管理",
        "routerName": "teacherManage"
    },
    {
        "isPermissions": true,
        "items": [
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "studentManage-studentInformation",
                "privilegeName": "学生信息",
                "routerName": "studentInformation"
            }
        ],
        "privilegeKey": "studentManage",
        "privilegeName": "学生管理",
        "routerName": "studentManage"
    },
    {
        "isPermissions": true,
        "items": [
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "attendManage-departmentsAttendance",
                "privilegeName": "院系考勤",
                "routerName": "departmentsAttendance"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "attendManage-gradeAttendance",
                "privilegeName": "年级考勤",
                "routerName": "gradeAttendance"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "attendManage-classAttendanceStatistical",
                "privilegeName": "班级考勤",
                "routerName": "classAttendanceStatistical"
            }
        ],
        "privilegeKey": "attendManage",
        "privilegeName": "考勤管理",
        "routerName": "attendManage"
    },
    {
        "isPermissions": true,
        "items": [
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "signManage-mySignIn",
                "privilegeName": "我的签到",
                "routerName": "mySignIn"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "signManage-mySponsor",
                "privilegeName": "我发起的签到",
                "routerName": "mySponsor"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "signManage-rollCallClass",
                "privilegeName": "班级点名",
                "routerName": "rollCallClass"
            }
        ],
        "privilegeKey": "signManage",
        "privilegeName": "签到情况",
        "routerName": "signManage"
    },
    {
        "isPermissions": true,
        "items": [
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "setting-loginPermissions",
                "privilegeName": "登录权限",
                "routerName": "loginPermissions"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "setting-permissionsTransfer",
                "privilegeName": "权限设置",
                "routerName": "permissionsTransfer"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "setting-systemPermissions",
                "privilegeName": "我的权限",
                "routerName": "systemPermissions"
            },
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "setting-changePassword",
                "privilegeName": "修改密码",
                "routerName": "changePassword"
            }
        ],
        "privilegeKey": "setting",
        "privilegeName": "设置管理",
        "routerName": "setting"
    },
    {
        "isPermissions": true,
        "items": [
            {
                "isPermissions": true,
                "items": [],
                "privilegeKey": "wristbandSetting-handRingBinding",
                "privilegeName": "手环绑定",
                "routerName": "handRingBinding"
            }
        ],
        "privilegeKey": "wristbandSetting",
        "privilegeName": "手环设置",
        "routerName": "wristbandSetting"
    }
]

export default menuList