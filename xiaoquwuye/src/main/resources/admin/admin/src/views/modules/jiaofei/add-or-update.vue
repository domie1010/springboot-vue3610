











<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='fangwu'">
                    <el-form-item class="select" v-if="type!='info'"  label="房屋" prop="fangwuId">
                        <el-select v-model="ruleForm.fangwuId" filterable placeholder="请选择房屋" @change="fangwuChange">
                            <el-option
                                    v-for="(item,index) in fangwuOptions"
                                    v-bind:key="item.id"
                                    :label="item.fangwuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='fangwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="房屋名称" prop="fangwuName">
                        <el-input v-model="fangwuForm.fangwuName"
                                  placeholder="房屋名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="房屋名称" prop="fangwuName">
                            <el-input v-model="ruleForm.fangwuName"
                                      placeholder="房屋名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='fangwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="房屋地址" prop="fangwuAddress">
                        <el-input v-model="fangwuForm.fangwuAddress"
                                  placeholder="房屋地址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="房屋地址" prop="fangwuAddress">
                            <el-input v-model="ruleForm.fangwuAddress"
                                      placeholder="房屋地址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='fangwu' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.fangwuPhoto" label="房屋照片" prop="fangwuPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (fangwuForm.fangwuPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.fangwuPhoto" label="房屋照片" prop="fangwuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.fangwuPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='fangwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="房屋类型" prop="fangwuValue">
                        <el-input v-model="fangwuForm.fangwuValue"
                                  placeholder="房屋类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="房屋类型" prop="fangwuValue">
                            <el-input v-model="ruleForm.fangwuValue"
                                      placeholder="房屋类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="fangwuId" name="fangwuId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="缴费名称" prop="jiaofeiName">
                       <el-input v-model="ruleForm.jiaofeiName"
                                 placeholder="缴费名称" clearable  :readonly="ro.jiaofeiName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="缴费名称" prop="jiaofeiName">
                           <el-input v-model="ruleForm.jiaofeiName"
                                     placeholder="缴费名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="缴费月份" prop="jiaofeiYuefen">
                       <el-date-picker
                               value-format="yyyy-MM-dd"
                               v-model="ruleForm.jiaofeiYuefen"
                               type="month"
                               placeholder="缴费月份">
                       </el-date-picker>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="缴费月份" prop="jiaofeiYuefen">
                           <el-input v-model="ruleForm.jiaofeiYuefen"
                                     placeholder="缴费月份" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="缴费类型" prop="jiaofeiTypes">
                        <el-select v-model="ruleForm.jiaofeiTypes" placeholder="请选择缴费类型">
                            <el-option
                                v-for="(item,index) in jiaofeiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="缴费类型" prop="jiaofeiValue">
                        <el-input v-model="ruleForm.jiaofeiValue"
                            placeholder="缴费类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="缴费金额" prop="newMoney">
                       <el-input type="number" v-model="ruleForm.newMoney"
                                 placeholder="缴费金额" clearable  :readonly="ro.newMoney"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="缴费金额" prop="newMoney">
                           <el-input type="number" v-model="ruleForm.newMoney"
                                     placeholder="缴费金额" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="缴费详情" prop="jiaofeiContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.jiaofeiContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.jiaofeiContent" label="缴费详情" prop="jiaofeiContent">
                            <span v-html="ruleForm.jiaofeiContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="是否缴费" prop="jiaofeiShifouTypes">
                        <el-select v-model="ruleForm.jiaofeiShifouTypes" placeholder="请选择是否缴费">
                            <el-option
                                v-for="(item,index) in jiaofeiShifouTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="是否缴费" prop="jiaofeiShifouValue">
                        <el-input v-model="ruleForm.jiaofeiShifouValue"
                            placeholder="是否缴费" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                fangwuForm: {},
                ro:{
                    fangwuId: false,
                    jiaofeiName: false,
                    jiaofeiYuefen: false,
                    jiaofeiTypes: false,
                    newMoney: false,
                    jiaofeiContent: false,
                    jiaofeiShifouTypes: false,
                    insertTime: false,
                },
                ruleForm: {
                    fangwuId: '',
                    jiaofeiName: '',
                    jiaofeiYuefen: '',
                    jiaofeiTypes: '',
                    newMoney: '',
                    jiaofeiContent: '',
                    jiaofeiShifouTypes: '',
                    insertTime: '',
                },
                jiaofeiTypesOptions : [],
                jiaofeiShifouTypesOptions : [],
                fangwuOptions : [],
                rules: {
                   fangwuId: [
                              { required: true, message: '房源不能为空', trigger: 'blur' },
                          ],
                   jiaofeiName: [
                              { required: true, message: '缴费名称不能为空', trigger: 'blur' },
                          ],
                   jiaofeiYuefen: [
                              { required: true, message: '缴费月份不能为空', trigger: 'blur' },
                          ],
                   jiaofeiTypes: [
                              { required: true, message: '缴费类型不能为空', trigger: 'blur' },
                          ],
                   newMoney: [
                              { required: true, message: '缴费金额不能为空', trigger: 'blur' },
                          ],
                   jiaofeiContent: [
                              { required: true, message: '缴费详情不能为空', trigger: 'blur' },
                          ],
                   jiaofeiShifouTypes: [
                              { required: true, message: '是否缴费不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '缴费发布时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");

            if (this.role != "管理员" && this.role != "员工"){
                this.ro.newMoney = true;
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiaofei_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jiaofeiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiaofei_shifou_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jiaofeiShifouTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `fangwu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.fangwuOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }else if(this.type=='cross'){
                    var obj = this.$storage.getObj('crossObj');
                    for (var o in obj){

                      if(o=='fangwuId'){
                          this.ruleForm.fangwuId = obj[o];
                          this.ro.fangwuId = true;
                          continue;
                      }
                      if(o=='jiaofeiName'){
                          this.ruleForm.jiaofeiName = obj[o];
                          this.ro.jiaofeiName = true;
                          continue;
                      }
                      if(o=='jiaofeiYuefen'){
                          this.ruleForm.jiaofeiYuefen = obj[o];
                          this.ro.jiaofeiYuefen = true;
                          continue;
                      }
                      if(o=='jiaofeiTypes'){
                          this.ruleForm.jiaofeiTypes = obj[o];
                          this.ro.jiaofeiTypes = true;
                          continue;
                      }
                      if(o=='newMoney'){
                          this.ruleForm.newMoney = obj[o];
                          this.ro.newMoney = true;
                          continue;
                      }
                      if(o=='jiaofeiContent'){
                          this.ruleForm.jiaofeiContent = obj[o];
                          this.ro.jiaofeiContent = true;
                          continue;
                      }
                      if(o=='jiaofeiShifouTypes'){
                          this.ruleForm.jiaofeiShifouTypes = obj[o];
                          this.ro.jiaofeiShifouTypes = true;
                          continue;
                      }
                      if(o=='insertTime'){
                          this.ruleForm.insertTime = obj[o];
                          this.ro.insertTime = true;
                          continue;
                      }
                    }
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            fangwuChange(id){
                this.$http({
                    url: `fangwu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.fangwuForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                this.$http({
                    url: `jiaofei/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.ruleForm = data.data;
                        this.fangwuChange(data.data.fangwuId)
                        //解决前台上传图片后台不显示的问题
                        let reg=new RegExp('../../../upload','g')//g代表全部
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`jiaofei/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.jiaofeiCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.jiaofeiCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

