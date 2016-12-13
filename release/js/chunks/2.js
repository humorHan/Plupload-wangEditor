webpackJsonp([2],{49:function(t,e,i){var r,s;i(50),r=i(52),s=i(53),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},50:function(t,e,i){var r=i(51);"string"==typeof r&&(r=[[t.id,r,""]]);i(42)(r,{});r.locals&&(t.exports=r.locals)},51:function(t,e,i){e=t.exports=i(41)(),e.push([t.id,".nav-pills>li>a[_v-a1dd5cf6]{cursor:pointer}.order-table[_v-a1dd5cf6]{table-layout:fixed}.order-table td[_v-a1dd5cf6],.order-table th[_v-a1dd5cf6]{text-align:center;vertical-align:middle}.order-table td .btn-link[_v-a1dd5cf6]{text-decoration:none;cursor:pointer}.order-table td .btn-link[_v-a1dd5cf6]:hover{text-decoration:underline}","",{version:3,sources:["/./src/views/order/list.vue.style"],names:[],mappings:"AAyMA,6BACA,cAAA,CACA,AAEA,0BACA,kBAAA,CACA,AAEA,0DACA,kBAAA,AACA,qBAAA,CACA,AAEA,uCACA,qBAAA,AACA,cAAA,CACA,AAEA,6CACA,yBAAA,CACA",file:"list.vue",sourcesContent:['<!-- orderList.vue -->\n<template>\n    <div class="container-fluid">\n        <ul class="breadcrumb">\n            <li>订单系统</li>\n            <li>订单管理</li>\n            <li>订单列表</li>\n        </ul>\n        <div class="pull-right">\n            <a class="btn btn-info btn-sm" v-if="permissionList.applyInvoice" v-link="{path: \'/order/invoice\'}">合并开票</a>\n            <a class="btn btn-info btn-sm" v-if="permissionList.createOrder" v-link="{path: \'/order/create\'}">下单</a>\n        </div>\n        <ul class="nav nav-pills">\n            <li :class="{\'active\': type === \'UNHANDLED\'}" v-if="permissionList.soyyinOrderList"><a @click="getList(\'UNHANDLED\')">未处理酱印网订单</a></li>\n            <li :class="{\'active\': type === \'ASSIGNED\'}" v-if="permissionList.myOrderList"><a @click="getList(\'ASSIGNED\')">我的订单</a></li>\n            <li :class="{\'active\': type === \'CREATED\'}" v-if="permissionList.createByMeOrderList"><a @click="getList(\'CREATED\')">由我创建</a></li>\n            <li :class="{\'active\': type === \'ALL\'}" v-if="permissionList.allOrderList"><a @click="getList(\'ALL\')">全部订单</a></li>\n        </ul>\n        <p class="clearfix"></p>\n        <form class="form-inline" style="margin-bottom:10px;" v-if="permissionList.soyyinOrderList || permissionList.myOrderList || permissionList.createByMeOrderList || permissionList.allOrderList">\n            <label class="control-label" for="fitlerType">筛选：</label>\n            <select class="form-control input-sm" id="fitlerType" style="width:80px;" v-model="filterType">\n                <option value="customer">客户信息</option>\n                <option value="manager">客户经理</option>\n            </select>\n            <input v-if="filterType === \'customer\'" class="form-control input-sm" style="width:120px;margin-left:20px;" type="text" placeholder="请输入客户信息" v-model="customerKeyword">\n            <select v-else class="form-control input-sm" style="width:120px;margin-left:20px;" v-model="managerChoosed" number>\n                <option value="0">全部</option>\n                <option v-for="manager of managerList" :value="manager.id">{{manager.display_name}}</option>\n            </select>\n            <a class="btn btn-info btn-sm" style="margin-left:30px;padding:6px 20px;" @click="getList(type, \'\', getFilterParams())">查询</a>\n        </form>\n        <h5 v-show="filterParams.customer || filterParams.managerId">{{getQueryDesc()}}</h5>\n        <table class="table table-bordered table-hover order-table">\n            <thead>\n                <tr>\n                    <th style="width:10%;">订单日期</th>\n                    <th style="width:10%;">订单号</th>\n                    <th style="width:20%;">客户</th>\n                    <th style="width:10%;">客户经理</th>\n                    <th style="width:12%;">总价/利润</th>\n                    <th style="width:10%;">订单状态</th>\n                    <th style="width:9%;">开票情况</th>\n                    <th style="width:10%;">付款情况</th>\n                    <th style="width:9%;">操作</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for="item of lists">\n                    <td>{{item.time | dateFormat \'toDate\'}}</td>\n                    <td>{{item.id}}</td>\n                    <td>{{item.customer.name + (item.customer.company ? \'/\' + item.customer.company : \'\')}}</td>\n                    <td>{{item.manager ? item.manager.display_name : \'\'}}</td>\n                    <td>{{(item.amount + item.freight) | realPrice}}{{item.is_priced ? \'\' : \'+?\'}} / {{(item.status === \'FINISHED\' ? (item.amount + item.freight - item.cost - item.extra_cost - item.logistics_cost - item.invoice_logistics_cost - item.refunded_amount) : \'\') | realPrice}}{{item.status === \'FINISHED\' ? \'\' : \'?\'}}元</td>\n                    <td :class="{\'text-success\': item.status === \'FINISHED\', \'text-danger\': item.status === \'CANCELED\'}">{{item.status | orderStatusFilter}}</td>\n                    <td>{{item.invoiced_amount > 0 ? (item.invoiced_amount >= item.amount + item.freight ? \'已开票\' : \'已部分开票\') : \'\'}}</td>\n                    <td>{{item.paid_amount > 0 ? (item.paid_amount === item.amount + item.freight ? \'已付款\' : \'已付款\' + Math.round(item.paid_amount / (item.amount + item.freight) *100) + \'%\') : \'\'}}</td>\n                    <td><a class="btn-link" v-link="{path:\'/order/detail/\'+item.id}" target="_blank">查看详情</a></td>\n                </tr>\n            </tbody>\n        </table>\n        <a class="btn btn-primary" v-if="sinceId" @click="getList(type, sinceId, filterParams)">查看更多</a>\n    </div>\n</template>\n\n<script>\nimport { callback } from \'../../store\'\nimport { unique } from \'../../filters\'\nimport { permissionValidator } from \'../../store/rolePermission.js\'\n\nexport default {\n    name: \'OrderListView\',\n    data() {\n        return {\n            type: \'\',\n            sinceId: \'\',\n            lists: [],\n            permissionList: {\n                createOrder: permissionValidator.orderSystem.order.createOrder(),\n                applyInvoice: permissionValidator.orderSystem.order.applyInvoice(),\n                soyyinOrderList: permissionValidator.orderSystem.order.soyyinOrderList(),\n                myOrderList: permissionValidator.orderSystem.order.myOrderList(),\n                createByMeOrderList: permissionValidator.orderSystem.order.createByMeOrderList(),\n                allOrderList: permissionValidator.orderSystem.order.allOrderList(),\n            },\n            filterType: \'customer\',\n            customerKeyword: \'\',\n            managerChoosed: 0,\n            managerList: [],\n            filterParams: {\n                customer: \'\',\n                managerId: 0,\n            },\n        }\n    },\n    ready() {\n        var getManagerFlag = true;\n        if (this.permissionList.soyyinOrderList) {\n            this.getList(\'UNHANDLED\');\n        } else if (this.permissionList.myOrderList) {\n            this.getList(\'ASSIGNED\');\n        } else if (this.permissionList.createByMeOrderList) {\n            this.getList(\'CREATED\');\n        } else if (this.permissionList.allOrderList) {\n            this.getList(\'ALL\');\n        } else {\n            getManagerFlag = false;\n        }\n        if (getManagerFlag) {\n            this.getManager();\n        }\n    },\n    methods: {\n        getList(type, sinceId, filterParams) {\n            var url = \'/api/v2/admin/orders/list-v2?type=\' + type;\n            if (sinceId) {\n                url += \'&since_id=\' + sinceId;\n            }\n            if (filterParams) {\n                if (filterParams.customer) {\n                    url += \'&customer=\' + filterParams.customer;\n                } else if (filterParams.managerId) {\n                    url += \'&manager_id=\' + filterParams.managerId;\n                }\n            }\n            this.$http.get(url)\n            .then((response) => {\n                if (!response.data.result || response.data.result === 0) {\n                    var arr = [];\n                    if (sinceId) {\n                        arr = this.lists.concat(response.data.orders);\n                    } else {\n                        arr = response.data.orders;\n                    }\n                    this.lists = unique(arr);\n                    this.type = type;\n                    this.$set("sinceId", response.data.since_id || \'\');\n                    if (filterParams) {\n                        this.filterParams = filterParams;\n                    } else {\n                        this.filterParams = {\n                            customer: \'\',\n                            managerId: 0,\n                        };\n                    }\n                } else {\n                    callback.success(response.data);\n                }\n            },(response) => {\n                callback.error(response);\n            })\n        },\n        getManager() {\n            var url = \'/api/v2/admin/permissions/manager-list\';\n            this.$http.get(url)\n            .then((response) => {\n                if(!response.data.result || response.data.result === 0){\n                    this.managerList = response.data.data;\n                } else {\n                    callback.success(response.data);\n                }\n            },(response) => {\n                callback.error(response);\n            })\n        },\n        getManagerName(managerId) {\n            for (let i = 0; i < this.managerList.length; i++) {\n                if (this.managerList[i].id === managerId) {\n                    return this.managerList[i].display_name;\n                }\n            }\n            return \'\';\n        },\n        getFilterParams() {\n            var filterParams = {\n                customer: \'\',\n                managerId: 0,\n            };\n            if (this.filterType === \'customer\') {\n                filterParams.customer = this.customerKeyword;\n            } else {\n                filterParams.managerId = this.managerChoosed;\n            }\n            return filterParams;\n        },\n        getQueryDesc() {\n            if (!this.filterParams.customer && !this.filterParams.managerId) {\n                return;\n            }\n            if (this.filterParams.customer) {\n                return \'客户信息 {\' + this.filterParams.customer + \'} 的查询结果：\';\n            }\n            if (this.filterParams.managerId) {\n                return \'客户经理 {\' + this.getManagerName(this.filterParams.managerId) + \'} 的查询结果：\';\n            }\n        },\n    }\n}\n</script>\n\n<style scoped>\n.nav-pills > li > a{\n    cursor: pointer;\n}\n\n.order-table {\n    table-layout: fixed;\n}\n\n.order-table th, .order-table td{\n    text-align: center;\n    vertical-align: middle;\n}\n\n.order-table td .btn-link {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.order-table td .btn-link:hover {\n    text-decoration: underline;\n}\n</style>'],sourceRoot:"webpack://"}])},52:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(48),s=i(31),a=i(45);e["default"]={name:"OrderListView",data:function(){return{type:"",sinceId:"",lists:[],permissionList:{createOrder:a.permissionValidator.orderSystem.order.createOrder(),applyInvoice:a.permissionValidator.orderSystem.order.applyInvoice(),soyyinOrderList:a.permissionValidator.orderSystem.order.soyyinOrderList(),myOrderList:a.permissionValidator.orderSystem.order.myOrderList(),createByMeOrderList:a.permissionValidator.orderSystem.order.createByMeOrderList(),allOrderList:a.permissionValidator.orderSystem.order.allOrderList()},filterType:"customer",customerKeyword:"",managerChoosed:0,managerList:[],filterParams:{customer:"",managerId:0}}},ready:function(){var t=!0;this.permissionList.soyyinOrderList?this.getList("UNHANDLED"):this.permissionList.myOrderList?this.getList("ASSIGNED"):this.permissionList.createByMeOrderList?this.getList("CREATED"):this.permissionList.allOrderList?this.getList("ALL"):t=!1,t&&this.getManager()},methods:{getList:function(t,e,i){var a=this,n="/api/v2/admin/orders/list-v2?type="+t;e&&(n+="&since_id="+e),i&&(i.customer?n+="&customer="+i.customer:i.managerId&&(n+="&manager_id="+i.managerId)),this.$http.get(n).then(function(n){if(n.data.result&&0!==n.data.result)r.callback.success(n.data);else{var d=[];d=e?a.lists.concat(n.data.orders):n.data.orders,a.lists=(0,s.unique)(d),a.type=t,a.$set("sinceId",n.data.since_id||""),i?a.filterParams=i:a.filterParams={customer:"",managerId:0}}},function(t){r.callback.error(t)})},getManager:function(){var t=this,e="/api/v2/admin/permissions/manager-list";this.$http.get(e).then(function(e){e.data.result&&0!==e.data.result?r.callback.success(e.data):t.managerList=e.data.data},function(t){r.callback.error(t)})},getManagerName:function(t){for(var e=0;e<this.managerList.length;e++)if(this.managerList[e].id===t)return this.managerList[e].display_name;return""},getFilterParams:function(){var t={customer:"",managerId:0};return"customer"===this.filterType?t.customer=this.customerKeyword:t.managerId=this.managerChoosed,t},getQueryDesc:function(){if(this.filterParams.customer||this.filterParams.managerId)return this.filterParams.customer?"客户信息 {"+this.filterParams.customer+"} 的查询结果：":this.filterParams.managerId?"客户经理 {"+this.getManagerName(this.filterParams.managerId)+"} 的查询结果：":void 0}}}},53:function(t,e){t.exports=' <div class=container-fluid _v-a1dd5cf6=""> <ul class=breadcrumb _v-a1dd5cf6=""> <li _v-a1dd5cf6="">订单系统</li> <li _v-a1dd5cf6="">订单管理</li> <li _v-a1dd5cf6="">订单列表</li> </ul> <div class=pull-right _v-a1dd5cf6=""> <a class="btn btn-info btn-sm" v-if=permissionList.applyInvoice v-link="{path: \'/order/invoice\'}" _v-a1dd5cf6="">合并开票</a> <a class="btn btn-info btn-sm" v-if=permissionList.createOrder v-link="{path: \'/order/create\'}" _v-a1dd5cf6="">下单</a> </div> <ul class="nav nav-pills" _v-a1dd5cf6=""> <li :class="{\'active\': type === \'UNHANDLED\'}" v-if=permissionList.soyyinOrderList _v-a1dd5cf6=""><a @click="getList(\'UNHANDLED\')" _v-a1dd5cf6="">未处理酱印网订单</a></li> <li :class="{\'active\': type === \'ASSIGNED\'}" v-if=permissionList.myOrderList _v-a1dd5cf6=""><a @click="getList(\'ASSIGNED\')" _v-a1dd5cf6="">我的订单</a></li> <li :class="{\'active\': type === \'CREATED\'}" v-if=permissionList.createByMeOrderList _v-a1dd5cf6=""><a @click="getList(\'CREATED\')" _v-a1dd5cf6="">由我创建</a></li> <li :class="{\'active\': type === \'ALL\'}" v-if=permissionList.allOrderList _v-a1dd5cf6=""><a @click="getList(\'ALL\')" _v-a1dd5cf6="">全部订单</a></li> </ul> <p class=clearfix _v-a1dd5cf6=""></p> <form class=form-inline style=margin-bottom:10px v-if="permissionList.soyyinOrderList || permissionList.myOrderList || permissionList.createByMeOrderList || permissionList.allOrderList" _v-a1dd5cf6=""> <label class=control-label for=fitlerType _v-a1dd5cf6="">筛选：</label> <select class="form-control input-sm" id=fitlerType style=width:80px v-model=filterType _v-a1dd5cf6=""> <option value=customer _v-a1dd5cf6="">客户信息</option> <option value=manager _v-a1dd5cf6="">客户经理</option> </select> <input v-if="filterType === \'customer\'" class="form-control input-sm" style=width:120px;margin-left:20px type=text placeholder=请输入客户信息 v-model=customerKeyword _v-a1dd5cf6=""> <select v-else="" class="form-control input-sm" style=width:120px;margin-left:20px v-model=managerChoosed number="" _v-a1dd5cf6=""> <option value=0 _v-a1dd5cf6="">全部</option> <option v-for="manager of managerList" :value=manager.id _v-a1dd5cf6="">{{manager.display_name}}</option> </select> <a class="btn btn-info btn-sm" style="margin-left:30px;padding:6px 20px" @click="getList(type, \'\', getFilterParams())" _v-a1dd5cf6="">查询</a> </form> <h5 v-show="filterParams.customer || filterParams.managerId" _v-a1dd5cf6="">{{getQueryDesc()}}</h5> <table class="table table-bordered table-hover order-table" _v-a1dd5cf6=""> <thead _v-a1dd5cf6=""> <tr _v-a1dd5cf6=""> <th style=width:10% _v-a1dd5cf6="">订单日期</th> <th style=width:10% _v-a1dd5cf6="">订单号</th> <th style=width:20% _v-a1dd5cf6="">客户</th> <th style=width:10% _v-a1dd5cf6="">客户经理</th> <th style=width:12% _v-a1dd5cf6="">总价/利润</th> <th style=width:10% _v-a1dd5cf6="">订单状态</th> <th style=width:9% _v-a1dd5cf6="">开票情况</th> <th style=width:10% _v-a1dd5cf6="">付款情况</th> <th style=width:9% _v-a1dd5cf6="">操作</th> </tr> </thead> <tbody _v-a1dd5cf6=""> <tr v-for="item of lists" _v-a1dd5cf6=""> <td _v-a1dd5cf6="">{{item.time | dateFormat \'toDate\'}}</td> <td _v-a1dd5cf6="">{{item.id}}</td> <td _v-a1dd5cf6="">{{item.customer.name + (item.customer.company ? \'/\' + item.customer.company : \'\')}}</td> <td _v-a1dd5cf6="">{{item.manager ? item.manager.display_name : \'\'}}</td> <td _v-a1dd5cf6="">{{(item.amount + item.freight) | realPrice}}{{item.is_priced ? \'\' : \'+?\'}} / {{(item.status === \'FINISHED\' ? (item.amount + item.freight - item.cost - item.extra_cost - item.logistics_cost - item.invoice_logistics_cost - item.refunded_amount) : \'\') | realPrice}}{{item.status === \'FINISHED\' ? \'\' : \'?\'}}元</td> <td :class="{\'text-success\': item.status === \'FINISHED\', \'text-danger\': item.status === \'CANCELED\'}" _v-a1dd5cf6="">{{item.status | orderStatusFilter}}</td> <td _v-a1dd5cf6="">{{item.invoiced_amount &gt; 0 ? (item.invoiced_amount &gt;= item.amount + item.freight ? \'已开票\' : \'已部分开票\') : \'\'}}</td> <td _v-a1dd5cf6="">{{item.paid_amount &gt; 0 ? (item.paid_amount === item.amount + item.freight ? \'已付款\' : \'已付款\' + Math.round(item.paid_amount / (item.amount + item.freight) *100) + \'%\') : \'\'}}</td> <td _v-a1dd5cf6=""><a class=btn-link v-link="{path:\'/order/detail/\'+item.id}" target=_blank _v-a1dd5cf6="">查看详情</a></td> </tr> </tbody> </table> <a class="btn btn-primary" v-if=sinceId @click="getList(type, sinceId, filterParams)" _v-a1dd5cf6="">查看更多</a> </div> '}});
//# sourceMappingURL=2.js.map?eedac9026f9c1fe791be