<template>
    <div>
        <input type="text" v-model="newTodoItem" placeholder="what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem:''
        }
    },
    methods : {
        addTodo() {
            //setItem은 로컬 스토리지에 데이터를 저장하는 api(key, value)
            //개발자도구 -> application -> localStorage -> localhost check
            if(this.newTodoItem !== "") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo',value);
                this.clearInput();
            } else {
                alert("할 일을 입력해주세요.")
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
