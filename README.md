# usage
~~~bash
npm install zsui --save
~~~
~~~javscript
import zsui from 'zsui'
import 'zsui/dist/style.css'
~~~

# API
## input
配置：

~~~javascript
props: {
	disbaled: //Boolean 是否禁止,
	type: //String （类型： 如'text', 'number'）
	placeholder: //String, 默认'请输入'
	readonly: //Boolean 是否只读,
	maxlength: //Number 最大字数,
	minlength: //Number 最小字数,
	value: //[String, number]
}

event: {
	@blur: //失焦事件
	@focus: //聚焦事件
	@input: //输入
	@change: //绑定值发生变化
}
~~~

示例：

~~~html
<zs-input
	:disabled="true"
	:readonly="false"
	v-model="value"
	:placeholder="请输入balabala"
	:maxlength="200"
	:minlength="100">
</zs-input>
~~~

## select

配置:

~~~javascript

props: {
	value: //默认为null,
	optionList: [{ //下拉选项，需提供label值与value值
		label: //,
		value: //
	}],
	disabled: //Boolean 是否禁用,
	readonly: //Boolean 选择输入框是否只读， 默认为只读，如需要可输入功能，则设为false,
	filterable: //Boolean 是否可搜索，若需要此功能，需将readonly属性设为false
}

event: {
	@change: //绑定值发生变化
}
~~~

示例：

基本使用：

~~~html
<zs-select
	:optionList="list"
	v-model="value"
	@change="handleChange">
</zs-select>

备注：重置时，将绑定值设为null
~~~

输入：

~~~html
<zs-select
	:optionList="list"
	:readonly="false">
</zs-select>
~~~

搜索：

~~~html
<zs-select
	:optionList="list"
	:readonly="false"
	:filterable="true">
</zs-select>
~~~


## pagination

配置:

~~~javascript
props: {
	totalPage: //Number, 总页数,
	size: //Number, 每页条数,
	page: //Number, 当前页
}

event：{
	@size-change: //size发生改变时触发
	@current-change: //当前页发生改变时触发
}
~~~

示例：

~~~html
<zs-paging
	:current='1'
	:all='10'
	@paging='paging'>
</zs-paging>
~~~

## button

### options

|name|type|default|
|-------|-----|-------|
|text|String|'点击'|
|type|String|'blue'('blue','white','disable')|
|widthType|String|'normal'('normal','mini')|
|icon|String|(iconfont名称)


### event

|name|description|
|--|--|
|click|type为'disable'不触发|

### example

~~~html
<zs-button
    type='white'
    text='猛击'
    widthType='mini'
    @click='click'>
</zs-button>
~~~

## toast

~~~javascript
this.$toast({
	msg:'这是信息',
	type:'success',//success或者error
	duration:''3000
})
//简易写法
this.$toast.success('成功')
this.$toast.error('失败')
this.$toast.warn('警告')
~~~

## confirm

~~~javascript
this.$confirm({
	msg:'这是信息',//default '这是提示信息'
	title:'这是标题',//default '提示'
	enterText:'确定按钮文本',//default '确定'
	closeText:'取消按钮文本'//default '取消'
}).then(res=>{
	if(res){
	    console.log('按了确定键')
	}else{
	    console.log('按了取消键')
	}
})
~~~

## alert

~~~javascript
this.$alert({
	title:'提示',//default '提示'
	enterText:'确定按钮文本',//default '确定'
	enterAlign: 'center',//default 'center'
	type:'success',//default 'success'
	msgTitle:'标题'//default '标题'
	msg:'信息',//default '这是提示信息'
}).then(res=>{
	if(res){
	    console.log('按了确定键')
	}else{
	    console.log('点击X')
	}
})
//简易写法(需要传入标题和副标题)
this.$alert.success({msgTitle:'成功',msg:'abc'})
this.$alert.error({msgTitle:'失败',msg:'abc'})
this.$alert.warn({msgTitle:'警告',msg:'abc'})
~~~

## dialog

### options

|name|type|default|
|-------|-----|-------|
|show|Boolean|false|
|title|String|'这是一个对话框'|
|enterText|String|'确定'
|enterAlign|String|'right'

### slot

|name|description|
|--|--|
|main|dialog主区域|

### event

|name|description|
|--|--|
|enter|确定按钮回调|
|close|取消按钮回调|

## cascader

配置：

~~~javascript
props: {
	data: //Array, 下拉选项
	value: //Array, 可设置默认值
	placeholder: String,
	disabled: //Boolean,
	allowClear: //Boolean, 是否有删除按钮， 默认为true
}

event: {
	@change: //绑定值发生变化时触发
}
~~~

示例：

~~~html
<zs-cascader
	:data="data"
	v-model="val"
	@change="handleChange"
>
</zs-cascader>
~~~
~~~javascript

data: [
	{
		label: 'test1',
		value: 'test1',
		children: [
			{lable: 'test11', value: 'test11'},
			{lable: 'test12', value: 'test12'},
		]
	},
	{
		label: 'test2',
		value: 'test2',
		children: [
			{
				lable: 'test21',
				value: 'test21'
			},
			{
				lable: 'test22',
				value: 'test22',
				children: [
					{label: 'test221', value: '221'}
				]
			},
		]
	}
]

val: ['test2', 'test22', 'test221']

handleChange(val){
	//val为新值
}
~~~

## breadcrumb

示例：

~~~html
<zs-breadcrumb>
	<zs-breadcrumb-item :to='{name: "routeA"}'>招生信息</zs-breadcrumb-item>
	<zs-breadcrumb-item :to='{name: "routeB"}'>学生信息</zs-breadcrumb-item>
	<span slot="right-option">
		<zs-button :text="添加"></zs-button>
	</span>
</zs-breadcrumb>
~~~

## main
~~~html
<zs-main
:leftMenuList='[{
      "routerName": "schoolManage",
      "title": "nihaoya",
      "isPermissions": false,
      "icon": 'icon-success',
      "items": [
          {
              "itemName": "kaixin",
              "routerName": "bbb"
          }
      ]
}]'
:leftMenuConfig='{
  titleName: 'title',
      iconName: 'icon',
      permissionName: 'isPermissions',
      listItemName: 'items',
      itemName: 'itemName',
      routerName: 'routerName'
</zs-main>
~~~

