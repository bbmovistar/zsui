const menuList = [
    {
        "isOpen": true,
        "routerName": "schoolManage",
        "title": "学校管理",
        "isPermissions": false,
        "icon": 'icon-success',
        "items": [
            {
                "itemName": "年级管理",
                "isOpen": true,
                "routerName": "bbb",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "classManage",
        "title": "班级管理",
        "isPermissions": true,
        "icon": 'icon-success',
        "items": [
            {
                "itemName": "班级信息",
                "isOpen": true,
                "routerName": "classMassage",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "teacherManage",
        "title": "教师管理",
        "isPermissions": true,
        "icon": 'icon-success',
        "items": [
            {
                "itemName": "教师信息",
                "isOpen": true,
                "routerName": "teachersInformation",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "studentManage",
        "title": "学生管理",
        "isPermissions": true,
        "items": [
            {
                "itemName": "学生信息",
                "isOpen": true,
                "routerName": "studentInformation",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "attendManage",
        "title": "考勤管理",
        "isPermissions": true,
        "items": [
            {
                "itemName": "年级考勤",
                "isOpen": true,
                "routerName": "gradeAttendance",
                "addHighlight": false
            },
            {
                "itemName": "班级考勤",
                "isOpen": true,
                "routerName": "classAttendanceStatistical",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "signManage",
        "title": "签到情况",
        "isPermissions": true,
        "items": [
            {
                "itemName": "我的签到",
                "isOpen": true,
                "routerName": "aaa",
                "addHighlight": false
            },
            {
                "itemName": "我发起的签到",
                "isOpen": true,
                "routerName": "mySponsor",
                "addHighlight": false
            },
            {
                "itemName": "班级点名",
                "isOpen": true,
                "routerName": "rollCallClass",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "setting",
        "title": "设置管理",
        "isPermissions": true,
        "items": [
            {
                "itemName": "登录权限",
                "isOpen": true,
                "routerName": "loginPermissions",
                "addHighlight": false
            },
            {
                "itemName": "权限设置",
                "isOpen": true,
                "routerName": "permissionsTransfer",
                "addHighlight": false
            },
            {
                "itemName": "我的权限",
                "isOpen": true,
                "routerName": "systemPermissions",
                "addHighlight": false
            },
            {
                "itemName": "修改密码",
                "isOpen": true,
                "routerName": "changePassword",
                "addHighlight": false
            }
        ]
    },
    {
        "isOpen": false,
        "routerName": "wristbandSetting",
        "title": "手环设置",
        "isPermissions": true,
        "items": [
            {
                "itemName": "手环绑定",
                "isOpen": true,
                "routerName": "handRingBinding",
                "addHighlight": false
            }
        ]
    }
]
export default menuList