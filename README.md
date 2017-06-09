## <center>input

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

## <center>select

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


## <center>pagination

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
<zs-pagination
	:totalPage="totalPage"
	:size="pageSize"
	:page="currentPage"
	@size-change="handleSizeChange"
	@current-page="handleCurrentChange">
</zs-pagination>
~~~

~~~javascript
handleSizeChange(val){
	val //新的size值
}

handleCurrentPage(val){
	val //新的当前页
}
~~~

## <center>button

配置:

~~~javascript
props: {
        buttonStyle://Object 额外的自定义样式
	text: //String 按钮文本
	color: //String 按钮颜色('blue','white','disable') 默认blue
	type: //String 按钮类型('normal','mini') 默认normal
}

event：{
	@click: //点击触发,color为disable不触发
}
~~~

示例：

~~~html
<zs-button
    color='white'
    text='点击'
    type='mini'
    @click='click'>
</zs-button>
~~~