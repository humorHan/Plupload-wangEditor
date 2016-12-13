webpackJsonp([7],{82:function(t,e,i){var r,s;i(83),r=i(85),s=i(86),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},83:function(t,e,i){var r=i(84);"string"==typeof r&&(r=[[t.id,r,""]]);i(42)(r,{});r.locals&&(t.exports=r.locals)},84:function(t,e,i){e=t.exports=i(41)(),e.push([t.id,".popuptips-container[_v-18a77ad0]{position:fixed;left:50%;top:40%;z-index:2000}.panel[_v-18a77ad0]{position:relative;left:-50%}.fade-transition[_v-18a77ad0]{-webkit-transition:all 1s ease;transition:all 1s ease}.fade-leave[_v-18a77ad0]{opacity:0}","",{version:3,sources:["/./src/components/popupTips.vue.style"],names:[],mappings:"AAuCA,kCACA,eAAA,AACA,SAAA,AACA,QAAA,AACA,YAAA,CACA,AACA,oBACA,kBAAA,AACA,SAAA,CACA,AAEA,8BACA,+BAAA,sBAAA,CACA,AAEA,yBACA,SAAA,CACA",file:"popupTips.vue",sourcesContent:['<!-- popupTips.vue -->\n<template>\n\t<div class="popuptips-container" v-if="show" transition="fade">\n\t    <div class="panel panel-{{ tipsType }}">\n\t\t\t<div class="panel-heading">\n\t\t   \t\t<h3 class="panel-title">{{ tipsTitle }}</h3>\n\t\t\t</div>\n\t\t\t<div class="panel-body">\n\t\t    \t{{ tipsContent }}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\n\nexport default {\n    name: \'PopupTipsView\',\n    replace: false,\n    props: {\n    \tshow: Boolean,\n    \ttipsType: String,\n    \ttipsTitle: String,\n    \ttipsContent: String\n    },\n    watch: {\n        show(val, oldVal) {\n            if (val === true) {\n            \tsetTimeout(() => {\n            \t\tthis.show = false;\n            \t}, 1000);\n            }\n        },\n    },\n}\n\n</script>\n\n<style scoped>\n.popuptips-container {\n\tposition: fixed;\n\tleft: 50%;\n\ttop: 40%;\n    z-index: 2000;\n}\n.panel {\n\tposition: relative;\n    left: -50%;\n}\n\n.fade-transition {\n  transition: all 1s ease;\n}\n\n.fade-leave {\n  opacity: 0;\n}\n</style>'],sourceRoot:"webpack://"}])},85:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"PopupTipsView",replace:!1,props:{show:Boolean,tipsType:String,tipsTitle:String,tipsContent:String},watch:{show:function(t,e){var i=this;t===!0&&setTimeout(function(){i.show=!1},1e3)}}}},86:function(t,e){t.exports=' <div class=popuptips-container v-if=show transition=fade _v-18a77ad0=""> <div class="panel panel-{{ tipsType }}" _v-18a77ad0=""> <div class=panel-heading _v-18a77ad0=""> <h3 class=panel-title _v-18a77ad0="">{{ tipsTitle }}</h3> </div> <div class=panel-body _v-18a77ad0=""> {{ tipsContent }} </div> </div> </div> '},87:function(t,e){"use strict";function i(t){var e={};return e.ok=!1,t?t.length>20?(e.errorMsg="产品名称长度不能大于20",e):(e.ok=!0,e):(e.errorMsg="产品名称不能为空",e)}function r(t){var e={};return e.ok=!1,t?t.length>12?(e.errorMsg="产品数量长度不能大于12",e):(e.ok=!0,e):(e.errorMsg="产品数量不能为空",e)}function s(t){var e={};return e.ok=!1,!t||t<0?(e.errorMsg="产品价格不能为空且必须为正数",e):(e.ok=!0,e)}function n(t){var e={};return e.ok=!1,t?t.length>20?(e.errorMsg="客户名称长度不能大于20",e):(e.ok=!0,e):(e.errorMsg="客户名称不能为空",e)}function d(t){var e={};return e.ok=!1,t?t.length>20?(e.errorMsg="收货人名称长度不能大于20",e):(e.ok=!0,e):(e.errorMsg="收货人名称不能为空",e)}function a(t){var e={};e.ok=!1;var i=/^[0-9]{11}$/;return t?i.test(t)?(e.ok=!0,e):(e.errorMsg="收货人手机格式有误",e):(e.errorMsg="收货人手机不能为空",e)}function o(t,e){var i={};return i.ok=!1,0===t?(i.errorMsg="请选择收货人所在地省市区",i):e?e.length>50?(i.errorMsg="收货人详细地址不能大于50",i):(i.ok=!0,i):(i.errorMsg="收货人详细地址不能为空",i)}function l(t){var e={};return e.ok=!1,!t||t<0?(e.errorMsg="开票金额不能为空且必须为正数",e):(e.ok=!0,e)}function p(t,e){var i={};return i.ok=!1,e?e.length>50?(i.errorMsg=t+"长度不能大于50",i):(i.ok=!0,i):(i.errorMsg=t+"不能为空",i)}function c(t,e){var i={};return i.ok=!1,void 0===t||null===t||""===t?(i.errorMsg="使用额度不能为空",i):t<=0||t>e?(i.errorMsg="使用额度必须为正数且不能超过"+e/100+"元",i):(i.ok=!0,i)}function u(t,e){var i={};return i.ok=!1,void 0===t||null===t||""===t?(i.errorMsg="补充金额不能为空",i):t<=e?(i.errorMsg="补充金额必须大于"+e/100+"元",i):(i.ok=!0,i)}function m(t){var e={};return e.ok=!1,void 0===t||null===t||""===t?(e.errorMsg="额外成本不能为空",e):t<0?(e.errorMsg="额外成本必须大于等于0",e):(e.ok=!0,e)}function v(t,e){var i={};return i.ok=!1,e?e.length>2e3?(i.errorMsg=t+"长度不能大于2000",i):(i.ok=!0,i):(i.errorMsg=t+"不能为空",i)}function h(t,e){var i={};return i.ok=!1,t?t<0?(i.errorMsg="成本必须大于0",i):(i.ok=!0,i):e?(i.ok=!0,i):(i.errorMsg="成本不能为空或者0",i)}function g(t){var e={};return e.ok=!1,void 0===t||null===t||""===t?(e.errorMsg="物流成本不能为空",e):t<0?(e.errorMsg="物流成本必须大于等于0",e):(e.ok=!0,e)}function y(t,e){var i={};return i.ok=!1,e?e.length>2e3?(i.errorMsg=t+"长度不能大于2000",i):(i.ok=!0,i):(i.errorMsg=t+"不能为空",i)}function f(t,e){var i={};return i.ok=!1,!t||t<0?(i.errorMsg="退款金额不能为空且必须为正数",i):t>e?(i.errorMsg="退款金额不能大于"+e/100+"元",i):(i.ok=!0,i)}function _(t){var e={};return e.ok=!1,t?t.length>50?(e.errorMsg="对方账号长度不能大于50",e):(e.ok=!0,e):(e.errorMsg="对方账号不能为空",e)}function A(t){var e={};return e.ok=!1,t?t.length>2e3?(e.errorMsg="退款原因长度不能大于2000",e):(e.ok=!0,e):(e.errorMsg="退款原因不能为空",e)}function b(t,e){var i={};return i.ok=!1,!t||t<0?(i.errorMsg="付款金额不能为空且必须为正数",i):t>e?(i.errorMsg="付款金额不能大于该订单剩余的待支付金额("+e/100+"元)",i):(i.ok=!0,i)}function L(t){var e={};return e.ok=!1,t?t.length>20?(e.errorMsg="供应商名称长度不能大于20",e):(e.ok=!0,e):(e.errorMsg="供应商名称不能为空",e)}function k(t){var e={};return e.ok=!1,t?t.length>20?(e.errorMsg="真实姓名长度不能大于20",e):(e.ok=!0,e):(e.errorMsg="真实姓名不能为空",e)}function I(t){var e={};return e.ok=!1,t?t.length>50?(e.errorMsg="用户名长度不能大于50",e):(e.ok=!0,e):(e.errorMsg="用户名不能为空",e)}function w(t){var e={};e.ok=!1;var i=/^[a-zA-Z0-9]*$/;return t?t.length>20?(e.errorMsg="密码长度不能超过20",e):i.test(t)?(e.ok=!0,e):(e.errorMsg="密码只能包含英文字母和数字",e):(e.errorMsg="密码不能为空",e)}Object.defineProperty(e,"__esModule",{value:!0});var S="******";e.orderValidator={validateProductName:i,validateProductQuantity:r,validateProductPrice:s,validateCustomerName:n,validateConsigneeName:d,validateConsigneePhone:a,validateConsigneeAddress:o,validateInvoiceAmount:l,validateInvoiceItem:p,validateApplyInvoiceAmount:c,validateExtraAmount:u,validateExtraCost:m,validateAfterSaleItem:v,validateProductCost:h,validateLogisticsCost:g,validateLogisticsItem:y,validateRefundAmount:f,validateRefundAccount:_,validateRefundReason:A},e.financeValidator={validatePaymentAmount:b},e.crmValidator={validateSupplierName:L,validateDisplayName:k,validateUserName:I,validatePassword:w,DEFAULT_PASSWORD:S}},166:function(t,e,i){var r,s;i(167),r=i(169),s=i(170),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},167:function(t,e,i){var r=i(168);"string"==typeof r&&(r=[[t.id,r,""]]);i(42)(r,{});r.locals&&(t.exports=r.locals)},168:function(t,e,i){e=t.exports=i(41)(),e.push([t.id,".nav-pills>li>a[_v-c75dd79a]{cursor:pointer}.order-table[_v-c75dd79a],.order-thead-table[_v-c75dd79a],.product-table[_v-c75dd79a],.product-thead-table[_v-c75dd79a]{table-layout:fixed}.order-table td[_v-c75dd79a],.order-thead-table th[_v-c75dd79a],.product-table td[_v-c75dd79a],.product-thead-table th[_v-c75dd79a]{text-align:center;vertical-align:middle}.btn-link[_v-c75dd79a],.order-table td .btn-link[_v-c75dd79a],.product-table td .btn-link[_v-c75dd79a]{text-decoration:none;cursor:pointer}.btn-link[_v-c75dd79a]:hover,.order-table td .btn-link[_v-c75dd79a]:hover,.product-table td .btn-link[_v-c75dd79a]:hover{text-decoration:underline}","",{version:3,sources:["/./src/views/order/supplier.vue.style"],names:[],mappings:"AAgVA,6BACA,cAAA,CACA,AAEA,wHACA,kBAAA,CACA,AAEA,oIACA,kBAAA,AACA,qBAAA,CACA,AAEA,uGACA,qBAAA,AACA,cAAA,CACA,AAEA,yHACA,yBAAA,CACA",file:"supplier.vue",sourcesContent:['<!-- supplier.vue -->\n<template>\n    <div class="container-fluid">\n        <ul class="breadcrumb">\n            <li>订单系统</li>\n            <li>供应商分配</li>\n        </ul>\n        <ul class="nav nav-pills">\n            <li :class="{\'active\': orderType === \'FROM_WEB\'}" v-if="permissionList.soyyinOrderList"><a @click="getList(\'FROM_WEB\', type)">酱印网订单</a></li>\n            <li :class="{\'active\': orderType === \'MY_CREATED\'}" v-if="permissionList.createByMeOrderList"><a @click="getList(\'MY_CREATED\', type)">由我创建</a></li>\n            <li :class="{\'active\': orderType === \'ALL\'}" v-if="permissionList.allOrderList"><a @click="getList(\'ALL\', type)">全部订单</a></li>\n        </ul>\n        <p class="clearfix"></p>\n        <ul class="nav nav-pills">\n            <li :class="{\'active\': type === \'NOT_ASSIGNED\'}" v-if="this.permissionList.soyyinOrderList || this.permissionList.createByMeOrderList || this.permissionList.allOrderList"><a @click="getList(orderType, \'NOT_ASSIGNED\')">待分配</a></li>\n            <li :class="{\'active\': type === \'ASSIGNED\'}" v-if="this.permissionList.soyyinOrderList || this.permissionList.createByMeOrderList || this.permissionList.allOrderList"><a @click="getList(orderType, \'ASSIGNED\')">已分配</a></li>\n        </ul>\n        <p class="clearfix"></p>\n        <table class="table order-thead-table" style="margin-bottom:0px;">\n            <thead>\n                <tr style="height:40px;background-color:#eee;">\n                    <th style="width:6%;">序号</th>\n                    <th style="width:13%;">订单日期</th>\n                    <th style="width:18%;">订单编号</th>\n                    <th style="width:15%;">客户经理/客服</th>\n                    <th style="width:40%;">客户名称/公司</th>\n                    <th style="width:8%;">操作</th>\n                </tr>\n            </thead>\n        </table>\n        <div style="margin-left:15px;">\n            <table class="table product-thead-table">\n                <thead>\n                    <tr style="background-color:#eee;font-size:14px;">\n                        <th style="width:6%;">ID</th>\n                        <th style="width:10%;">产品名称</th>\n                        <th style="width:22%;">参数</th>\n                        <th style="width:8%;">数量</th>\n                        <th style="width:14%;">到货时间要求</th>\n                        <th style="width:10%;">供应商*</th>\n                        <th style="width:10%;">制作负责人*</th>\n                        <th style="width:10%;">成本(元)</th>\n                        <th style="width:10%;">操作</th>\n                    </tr>\n                </thead>\n            </table>\n        </div>\n        <template v-for="orderItem in orderList">\n            <table class="table table-bordered table-hover order-table" style="margin-bottom:0px;">\n                <tbody>\n                    <tr style="height:45px;">\n                        <td style="width:6%;"><b>{{$index + 1}}</b></td>\n                        <td style="width:13%;">{{orderItem.time | dateFormat \'toDate\'}}</td>\n                        <td style="width:18%;"><a class="btn-link" v-link="{path:\'/order/detail/\'+orderItem.id}" target="_blank">{{orderItem.id}}</a></td>\n                        <td style="width:15%;">{{orderItem.manager ? orderItem.manager.display_name : \'\'}}</td>\n                        <td style="width:40%;">{{orderItem.customer.name + (orderItem.customer.company ? \'/\' + orderItem.customer.company : \'\')}}</td>\n                        <td style="width:8%;"><a class="btn-link" @click="showOrHideOrderItem(orderItem)">{{orderItem.showAll ? \'收起\' : \'展开\'}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n            <div style="margin-left:15px;margin-bottom:15px;">\n                <table class="table table-bordered table-hover product-table" style="margin-bottom:0px;">\n                    <tbody>\n                        <tr v-for="item of orderItem.items">\n                            <td style="width:6%;">{{item.id}}</td>\n                            <template v-if="item.is_custom">\n                                <td style="width:10%;">{{item.detail.name}}</td>\n                                <td style="width:22%;">{{item.detail.size}}{{(item.detail.size && (item.detail.caizhi || item.detail.others)) ? \'_\' : \'\'}}{{item.detail.caizhi}}{{(item.detail.caizhi && item.detail.others) ? \'_\' : \'\'}}{{item.detail.others}}</td>\n                                <td style="width:8%;">{{item.detail.quantity}}</td>\n                            </template>\n                            <template v-else>\n                                <td style="width:10%;">\n                                    <a class="btn-link" :href="\'http://www.soyyin.com/product?id=\'+item.product_id+\'#\'+item.brief" target="_blank">{{item.title}}</a>\n                                </td>\n                                <td style="width:22%;">{{item.brief}}</td>\n                                <td style="width:8%;">{{item.quantity}}</td>\n                            </template>\n                            <td style="width:14%;">{{item.arrival_time}}</td>\n                            <td style="width:10%;" v-if="!item.assigning">{{item.supplier ? item.supplier.name : \'\'}}</td>\n                            <td style="width:10%;" v-else>\n                                <select class="form-control input-sm" v-model="item.assigningSupplier" number>\n                                    <option v-for="supplier of supplierList" :value="supplier.id">{{supplier.name}}</option>\n                                </select>\n                            </td>\n                            <td style="width:10%;" v-if="!item.assigning">{{item.producer ? item.producer.name : \'\'}}</td>\n                            <td style="width:10%;" v-else>\n                                <select class="form-control input-sm" v-model="item.assigningProducer" number>\n                                    <option v-for="producer of producerList" :value="producer.id">{{producer.display_name}}</option>\n                                </select>\n                            </td>\n                            <td style="width:10%;" v-if="!item.assigning">{{item.cost | realPrice}}</td>\n                            <td style="width:10%;" v-else>\n                                <input class="form-control input-sm" type="text" name="assigningCost" v-model="item.assigningCost | priceFilter">\n                            </td>\n                            <td style="width:10%;" v-if="!item.assigning"><a class="btn-link" v-if="permissionList.assignSupplier && item.produce_status !== \'COMPLETE\' && (orderItem.status === \'DELIVERY_CONFIRMED\' || orderItem.status === \'DELIVERY_PAID\' || orderItem.status === \'ONLINE_CONFIRMED\')" @click="changeToEditSupplierStatus(item)">分配供应商</a></td>\n                            <td style="width:10%;" v-else>\n                                <a class="btn-link" @click="assignSupplier(item)">确定</a>\n                                <a class="btn-link" style="margin-left:15px;" @click="cancelEdit(item)">取消</a>  \n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class="panel panel-default" style="margin-bottom:0px;" v-show="orderItem.showAll">\n                    <div class="panel-body">\n                        <div class="row">\n                            <div class="col-md-6">\n                                <h4>收货信息</h4>\n                                <template v-for="consigneeItem in orderItem.consignees">\n                                    <p>{{$index+1}}. 收货地址：{{consigneeItem.address}}</p>\n                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收货备注：{{consigneeItem.remark}}</p>\n                                </template>\n                            </div>\n                            <div class="col-md-5">\n                                <h4>备注信息</h4>\n                                <p>{{orderItem.remark}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </template>\n        <a class="btn btn-primary" v-if="sinceId" @click="getList(orderType, type, sinceId)">查看更多</a>\n        <popup-tips :show.sync="dataForPopupTips.show" :tips-type="dataForPopupTips.type" :tips-title="dataForPopupTips.title" :tips-content="dataForPopupTips.content"></popup-tips>\n    </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport popupTips from \'../../components/popupTips.vue\'\nimport { callback } from \'../../store\'\nimport { unique } from \'../../filters\'\nimport { orderValidator } from \'../../store/dataValidator.js\'\nimport { permissionValidator } from \'../../store/rolePermission.js\'\nimport $ from \'jquery\'\n\nexport default {\n    name: \'AssignSupplierView\',\n    components: {\n        popupTips,\n    },\n    data() {\n        return {\n            userId: parseInt($.cookie("id")),\n            orderType: \'\',\n            type: \'\',\n            sinceId: \'\',\n            orderList: [],\n            permissionList: {\n                soyyinOrderList: permissionValidator.orderSystem.supplier.soyyinOrderList(),\n                createByMeOrderList: permissionValidator.orderSystem.supplier.createByMeOrderList(),\n                allOrderList: permissionValidator.orderSystem.supplier.allOrderList(),\n                assignSupplier: permissionValidator.orderSystem.supplier.assignSupplier(),\n            },\n            supplierList: [],\n            producerList: [],\n            dataForPopupTips: {\n                show: false,\n                type: \'danger\',\n                title: \'\',\n                content: \'\',\n            },\n        }\n    },\n    ready() {\n        if (this.permissionList.soyyinOrderList) {\n            this.getList(\'FROM_WEB\', \'NOT_ASSIGNED\');\n        } else if (this.permissionList.createByMeOrderList) {\n            this.getList(\'MY_CREATED\', \'NOT_ASSIGNED\');\n        } else if (this.permissionList.allOrderList) {\n            this.getList(\'ALL\', \'NOT_ASSIGNED\');\n        }\n        if ((this.permissionList.soyyinOrderList || this.permissionList.createByMeOrderList || this.permissionList.allOrderList) && this.permissionList.assignSupplier) {\n            this.getSuppliers();\n            this.getProducers();\n        }\n    },\n    methods: {\n        findSupplier(id) {\n            for (var i = 0; i < this.supplierList.length; i++) {\n                if (this.supplierList[i].id === id) {\n                    return this.supplierList[i];\n                }\n            }\n        },\n        findProducer(id) {\n            for (var i = 0; i < this.producerList.length; i++) {\n                if (this.producerList[i].id === id) {\n                    return this.producerList[i];\n                }\n            }\n        },\n        getSuppliers() {\n            var url = \'/api/v2/admin/suppliers/brief-list\';\n            this.$http.get(url)\n            .then((response) => {\n                if(!response.data.result || response.data.result === 0){\n                    this.supplierList = response.data.suppliers;\n                } else {\n                    callback.success(response.data);\n                }\n            },(response) => {\n                callback.error(response);\n            });\n        },\n        getProducers() {\n            var url = \'/api/v2/admin/permissions/producer-list\';\n            this.$http.get(url)\n            .then((response) => {\n                if(!response.data.result || response.data.result === 0){\n                    this.producerList = response.data.data;\n                } else {\n                    callback.success(response.data);\n                }\n            },(response) => {\n                callback.error(response);\n            });\n        },\n        getList(orderType, type, sinceId) {\n            var url = \'/api/v2/admin/suppliers/order-list?limit=50&type=\' + type + \'&order_type=\' + orderType;\n            if (sinceId) {\n                url += \'&since_id=\' + sinceId;\n            }\n            this.$http.get(url)\n            .then((response) => {\n                if (!response.data.result || response.data.result === 0) {\n                    var arr = [];\n                    if(sinceId){\n                        arr = this.orderList.concat(response.data.orders);\n                    } else {\n                        arr = response.data.orders;\n                    }\n                    this.orderList = unique(arr);\n                    this.orderType = orderType;\n                    this.type = type;\n                    this.$set("sinceId", response.data.since_id || \'\');\n                } else {\n                    callback.success(response.data);\n                }\n            },(response) => {\n                callback.error(response);\n            })\n        },\n        showOrHideOrderItem(orderItem) {\n            if (orderItem.showAll === undefined) {\n                Vue.set(orderItem, \'showAll\', true);\n            } else {\n                orderItem.showAll = !orderItem.showAll;\n            }\n        },\n        changeToEditSupplierStatus(productItem) {\n            productItem.assigningSupplier = productItem.supplier ? productItem.supplier.id : undefined;\n            if (productItem.producer) {\n                productItem.assigningProducer = productItem.producer.id;\n            } else {\n                let flag = false;\n                for (let i = 0; i < this.producerList.length; i++) {\n                    if (this.producerList[i].id === this.userId) {\n                        productItem.assigningProducer = this.producerList[i].id;\n                        flag = true;\n                        break;\n                    }\n                }\n                if (!flag) {\n                    productItem.assigningProducer = undefined;\n                }\n            }\n            Vue.set(productItem, \'assigningCost\', productItem.cost);\n            if (productItem.assigning === undefined) {\n                Vue.set(productItem, \'assigning\', true);\n            } else {\n                productItem.assigning = true;\n            }\n        },\n        cancelEdit(productItem) {\n            productItem.assigning = false;\n        },\n        validateSupplier(productItem) {\n            var result = orderValidator.validateProductCost(productItem.assigningCost, true);\n            if (!result.ok) {\n                return result.errorMsg;\n            }\n            if (!productItem.assigningSupplier) {\n                return "请选择供应商";\n            }\n            if (!productItem.assigningProducer) {\n                return "请选择制作负责人";\n            }\n            return;\n        },\n        assignSupplier(productItem) {\n            var result = this.validateSupplier(productItem);\n            if (result) {\n                this.dataForPopupTips.show = true;\n                this.dataForPopupTips.title = \'输入有误\';\n                this.dataForPopupTips.content = result;\n                return;\n            }\n            var url = \'/api/v2/admin/suppliers/assign-supplier?item_id=\' + productItem.id;\n            var data = {\n                supplier_id: productItem.assigningSupplier,\n                producer_id: productItem.assigningProducer,\n            };\n            if (productItem.assigningCost) {\n                data.cost = productItem.assigningCost;\n            }\n            this.$http.post(url, data)\n            .then((response) => {\n                if(!response.data.result || response.data.result === 0) {\n                    var supplier = this.findSupplier(data.supplier_id);\n                    var producer = this.findProducer(data.producer_id);\n                    if (supplier) {\n                        productItem.supplier = {\n                            id: supplier.id,\n                            name: supplier.name,\n                        };\n                    }\n                    if (producer) {\n                        productItem.producer = {\n                            id: producer.id,\n                            name: producer.display_name,\n                        };\n                    }\n                    productItem.cost = data.cost;\n                    productItem.assigning = false;\n                } else {\n                    callback.success(response.data);\n                }\n            },(response) => {\n                callback.error(response);\n            });\n        },\n    }\n}\n</script>\n\n<style scoped>\n.nav-pills > li > a{\n    cursor: pointer;\n}\n\n.order-table, .order-thead-table, .product-table, .product-thead-table{\n    table-layout: fixed;\n}\n\n.order-table td, .order-thead-table th, .product-table td, .product-thead-table th {\n    text-align: center;\n    vertical-align: middle;\n}\n\n.order-table td .btn-link, .product-table td .btn-link, .btn-link {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.order-table td .btn-link:hover, .product-table td .btn-link:hover, .btn-link:hover {\n    text-decoration: underline;\n}\n</style>'],sourceRoot:"webpack://"}])},169:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),n=r(s),d=i(82),a=r(d),o=i(48),l=i(31),p=i(87),c=i(45),u=i(4),m=r(u);e["default"]={name:"AssignSupplierView",components:{popupTips:a["default"]},data:function(){return{userId:parseInt(m["default"].cookie("id")),orderType:"",type:"",sinceId:"",orderList:[],permissionList:{soyyinOrderList:c.permissionValidator.orderSystem.supplier.soyyinOrderList(),createByMeOrderList:c.permissionValidator.orderSystem.supplier.createByMeOrderList(),allOrderList:c.permissionValidator.orderSystem.supplier.allOrderList(),assignSupplier:c.permissionValidator.orderSystem.supplier.assignSupplier()},supplierList:[],producerList:[],dataForPopupTips:{show:!1,type:"danger",title:"",content:""}}},ready:function(){this.permissionList.soyyinOrderList?this.getList("FROM_WEB","NOT_ASSIGNED"):this.permissionList.createByMeOrderList?this.getList("MY_CREATED","NOT_ASSIGNED"):this.permissionList.allOrderList&&this.getList("ALL","NOT_ASSIGNED"),(this.permissionList.soyyinOrderList||this.permissionList.createByMeOrderList||this.permissionList.allOrderList)&&this.permissionList.assignSupplier&&(this.getSuppliers(),this.getProducers())},methods:{findSupplier:function(t){for(var e=0;e<this.supplierList.length;e++)if(this.supplierList[e].id===t)return this.supplierList[e]},findProducer:function(t){for(var e=0;e<this.producerList.length;e++)if(this.producerList[e].id===t)return this.producerList[e]},getSuppliers:function(){var t=this,e="/api/v2/admin/suppliers/brief-list";this.$http.get(e).then(function(e){e.data.result&&0!==e.data.result?o.callback.success(e.data):t.supplierList=e.data.suppliers},function(t){o.callback.error(t)})},getProducers:function(){var t=this,e="/api/v2/admin/permissions/producer-list";this.$http.get(e).then(function(e){e.data.result&&0!==e.data.result?o.callback.success(e.data):t.producerList=e.data.data},function(t){o.callback.error(t)})},getList:function(t,e,i){var r=this,s="/api/v2/admin/suppliers/order-list?limit=50&type="+e+"&order_type="+t;i&&(s+="&since_id="+i),this.$http.get(s).then(function(s){if(s.data.result&&0!==s.data.result)o.callback.success(s.data);else{var n=[];n=i?r.orderList.concat(s.data.orders):s.data.orders,r.orderList=(0,l.unique)(n),r.orderType=t,r.type=e,r.$set("sinceId",s.data.since_id||"")}},function(t){o.callback.error(t)})},showOrHideOrderItem:function(t){void 0===t.showAll?n["default"].set(t,"showAll",!0):t.showAll=!t.showAll},changeToEditSupplierStatus:function(t){if(t.assigningSupplier=t.supplier?t.supplier.id:void 0,t.producer)t.assigningProducer=t.producer.id;else{for(var e=!1,i=0;i<this.producerList.length;i++)if(this.producerList[i].id===this.userId){t.assigningProducer=this.producerList[i].id,e=!0;break}e||(t.assigningProducer=void 0)}n["default"].set(t,"assigningCost",t.cost),void 0===t.assigning?n["default"].set(t,"assigning",!0):t.assigning=!0},cancelEdit:function(t){t.assigning=!1},validateSupplier:function(t){var e=p.orderValidator.validateProductCost(t.assigningCost,!0);return e.ok?t.assigningSupplier?t.assigningProducer?void 0:"请选择制作负责人":"请选择供应商":e.errorMsg},assignSupplier:function(t){var e=this,i=this.validateSupplier(t);if(i)return this.dataForPopupTips.show=!0,this.dataForPopupTips.title="输入有误",void(this.dataForPopupTips.content=i);var r="/api/v2/admin/suppliers/assign-supplier?item_id="+t.id,s={supplier_id:t.assigningSupplier,producer_id:t.assigningProducer};t.assigningCost&&(s.cost=t.assigningCost),this.$http.post(r,s).then(function(i){if(i.data.result&&0!==i.data.result)o.callback.success(i.data);else{var r=e.findSupplier(s.supplier_id),n=e.findProducer(s.producer_id);r&&(t.supplier={id:r.id,name:r.name}),n&&(t.producer={id:n.id,name:n.display_name}),t.cost=s.cost,t.assigning=!1}},function(t){o.callback.error(t)})}}}},170:function(t,e){t.exports=' <div class=container-fluid _v-c75dd79a=""> <ul class=breadcrumb _v-c75dd79a=""> <li _v-c75dd79a="">订单系统</li> <li _v-c75dd79a="">供应商分配</li> </ul> <ul class="nav nav-pills" _v-c75dd79a=""> <li :class="{\'active\': orderType === \'FROM_WEB\'}" v-if=permissionList.soyyinOrderList _v-c75dd79a=""><a @click="getList(\'FROM_WEB\', type)" _v-c75dd79a="">酱印网订单</a></li> <li :class="{\'active\': orderType === \'MY_CREATED\'}" v-if=permissionList.createByMeOrderList _v-c75dd79a=""><a @click="getList(\'MY_CREATED\', type)" _v-c75dd79a="">由我创建</a></li> <li :class="{\'active\': orderType === \'ALL\'}" v-if=permissionList.allOrderList _v-c75dd79a=""><a @click="getList(\'ALL\', type)" _v-c75dd79a="">全部订单</a></li> </ul> <p class=clearfix _v-c75dd79a=""></p> <ul class="nav nav-pills" _v-c75dd79a=""> <li :class="{\'active\': type === \'NOT_ASSIGNED\'}" v-if="this.permissionList.soyyinOrderList || this.permissionList.createByMeOrderList || this.permissionList.allOrderList" _v-c75dd79a=""><a @click="getList(orderType, \'NOT_ASSIGNED\')" _v-c75dd79a="">待分配</a></li> <li :class="{\'active\': type === \'ASSIGNED\'}" v-if="this.permissionList.soyyinOrderList || this.permissionList.createByMeOrderList || this.permissionList.allOrderList" _v-c75dd79a=""><a @click="getList(orderType, \'ASSIGNED\')" _v-c75dd79a="">已分配</a></li> </ul> <p class=clearfix _v-c75dd79a=""></p> <table class="table order-thead-table" style=margin-bottom:0px _v-c75dd79a=""> <thead _v-c75dd79a=""> <tr style=height:40px;background-color:#eee _v-c75dd79a=""> <th style=width:6% _v-c75dd79a="">序号</th> <th style=width:13% _v-c75dd79a="">订单日期</th> <th style=width:18% _v-c75dd79a="">订单编号</th> <th style=width:15% _v-c75dd79a="">客户经理/客服</th> <th style=width:40% _v-c75dd79a="">客户名称/公司</th> <th style=width:8% _v-c75dd79a="">操作</th> </tr> </thead> </table> <div style=margin-left:15px _v-c75dd79a=""> <table class="table product-thead-table" _v-c75dd79a=""> <thead _v-c75dd79a=""> <tr style=background-color:#eee;font-size:14px _v-c75dd79a=""> <th style=width:6% _v-c75dd79a="">ID</th> <th style=width:10% _v-c75dd79a="">产品名称</th> <th style=width:22% _v-c75dd79a="">参数</th> <th style=width:8% _v-c75dd79a="">数量</th> <th style=width:14% _v-c75dd79a="">到货时间要求</th> <th style=width:10% _v-c75dd79a="">供应商*</th> <th style=width:10% _v-c75dd79a="">制作负责人*</th> <th style=width:10% _v-c75dd79a="">成本(元)</th> <th style=width:10% _v-c75dd79a="">操作</th> </tr> </thead> </table> </div> <template v-for="orderItem in orderList" _v-c75dd79a=""> <table class="table table-bordered table-hover order-table" style=margin-bottom:0px _v-c75dd79a=""> <tbody _v-c75dd79a=""> <tr style=height:45px _v-c75dd79a=""> <td style=width:6% _v-c75dd79a=""><b _v-c75dd79a="">{{$index + 1}}</b></td> <td style=width:13% _v-c75dd79a="">{{orderItem.time | dateFormat \'toDate\'}}</td> <td style=width:18% _v-c75dd79a=""><a class=btn-link v-link="{path:\'/order/detail/\'+orderItem.id}" target=_blank _v-c75dd79a="">{{orderItem.id}}</a></td> <td style=width:15% _v-c75dd79a="">{{orderItem.manager ? orderItem.manager.display_name : \'\'}}</td> <td style=width:40% _v-c75dd79a="">{{orderItem.customer.name + (orderItem.customer.company ? \'/\' + orderItem.customer.company : \'\')}}</td> <td style=width:8% _v-c75dd79a=""><a class=btn-link @click=showOrHideOrderItem(orderItem) _v-c75dd79a="">{{orderItem.showAll ? \'收起\' : \'展开\'}}</a></td> </tr> </tbody> </table> <div style=margin-left:15px;margin-bottom:15px _v-c75dd79a=""> <table class="table table-bordered table-hover product-table" style=margin-bottom:0px _v-c75dd79a=""> <tbody _v-c75dd79a=""> <tr v-for="item of orderItem.items" _v-c75dd79a=""> <td style=width:6% _v-c75dd79a="">{{item.id}}</td> <template v-if=item.is_custom _v-c75dd79a=""> <td style=width:10% _v-c75dd79a="">{{item.detail.name}}</td> <td style=width:22% _v-c75dd79a="">{{item.detail.size}}{{(item.detail.size &amp;&amp; (item.detail.caizhi || item.detail.others)) ? \'_\' : \'\'}}{{item.detail.caizhi}}{{(item.detail.caizhi &amp;&amp; item.detail.others) ? \'_\' : \'\'}}{{item.detail.others}}</td> <td style=width:8% _v-c75dd79a="">{{item.detail.quantity}}</td> </template> <template v-else="" _v-c75dd79a=""> <td style=width:10% _v-c75dd79a=""> <a class=btn-link :href="\'http://www.soyyin.com/product?id=\'+item.product_id+\'#\'+item.brief" target=_blank _v-c75dd79a="">{{item.title}}</a> </td> <td style=width:22% _v-c75dd79a="">{{item.brief}}</td> <td style=width:8% _v-c75dd79a="">{{item.quantity}}</td> </template> <td style=width:14% _v-c75dd79a="">{{item.arrival_time}}</td> <td style=width:10% v-if=!item.assigning _v-c75dd79a="">{{item.supplier ? item.supplier.name : \'\'}}</td> <td style=width:10% v-else="" _v-c75dd79a=""> <select class="form-control input-sm" v-model=item.assigningSupplier number="" _v-c75dd79a=""> <option v-for="supplier of supplierList" :value=supplier.id _v-c75dd79a="">{{supplier.name}}</option> </select> </td> <td style=width:10% v-if=!item.assigning _v-c75dd79a="">{{item.producer ? item.producer.name : \'\'}}</td> <td style=width:10% v-else="" _v-c75dd79a=""> <select class="form-control input-sm" v-model=item.assigningProducer number="" _v-c75dd79a=""> <option v-for="producer of producerList" :value=producer.id _v-c75dd79a="">{{producer.display_name}}</option> </select> </td> <td style=width:10% v-if=!item.assigning _v-c75dd79a="">{{item.cost | realPrice}}</td> <td style=width:10% v-else="" _v-c75dd79a=""> <input class="form-control input-sm" type=text name=assigningCost v-model="item.assigningCost | priceFilter" _v-c75dd79a=""> </td> <td style=width:10% v-if=!item.assigning _v-c75dd79a=""><a class=btn-link v-if="permissionList.assignSupplier &amp;&amp; item.produce_status !== \'COMPLETE\' &amp;&amp; (orderItem.status === \'DELIVERY_CONFIRMED\' || orderItem.status === \'DELIVERY_PAID\' || orderItem.status === \'ONLINE_CONFIRMED\')" @click=changeToEditSupplierStatus(item) _v-c75dd79a="">分配供应商</a></td> <td style=width:10% v-else="" _v-c75dd79a=""> <a class=btn-link @click=assignSupplier(item) _v-c75dd79a="">确定</a> <a class=btn-link style=margin-left:15px @click=cancelEdit(item) _v-c75dd79a="">取消</a> </td> </tr> </tbody> </table> <div class="panel panel-default" style=margin-bottom:0px v-show=orderItem.showAll _v-c75dd79a=""> <div class=panel-body _v-c75dd79a=""> <div class=row _v-c75dd79a=""> <div class=col-md-6 _v-c75dd79a=""> <h4 _v-c75dd79a="">收货信息</h4> <template v-for="consigneeItem in orderItem.consignees" _v-c75dd79a=""> <p _v-c75dd79a="">{{$index+1}}. 收货地址：{{consigneeItem.address}}</p> <p _v-c75dd79a="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收货备注：{{consigneeItem.remark}}</p> </template> </div> <div class=col-md-5 _v-c75dd79a=""> <h4 _v-c75dd79a="">备注信息</h4> <p _v-c75dd79a="">{{orderItem.remark}}</p> </div> </div> </div> </div> </div> </template> <a class="btn btn-primary" v-if=sinceId @click="getList(orderType, type, sinceId)" _v-c75dd79a="">查看更多</a> <popup-tips :show.sync=dataForPopupTips.show :tips-type=dataForPopupTips.type :tips-title=dataForPopupTips.title :tips-content=dataForPopupTips.content _v-c75dd79a=""></popup-tips> </div> ';
}});
//# sourceMappingURL=7.js.map?eedac9026f9c1fe791be