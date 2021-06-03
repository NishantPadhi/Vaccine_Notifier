<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" id="bg-color-info">
            <b-navbar-brand href="#">Vaccine Notifier</b-navbar-brand>


            <b-collapse id="nav-collapse" is-nav>
            

                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" v-if="!isUser">sign in</b-button>
                    </b-nav-form>
                    <b-nav-item-dropdown right v-if="isUser">
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
  name: 'Header',
  data:function(){
      return {
          isUser:false,
      }
  },
  mounted:function(){

  }
}
</script>
<style>
.nav-item.b-nav-dropdown.dropdown.show{
    background-color:red;
}
.nav-item.b-nav-dropdown.dropdown{
    text-align:right;
}
.navbar-nav.ml-auto{
    margin-left:93%;
}
.my-2.my-sm-0.padding.btn-secondary.btn-sm.padding-rgt{
    margin-right:5px;
}
.navbar-brand{
    margin-left:10px;
}

#bg-color-info{
    background-color: #008080 !important;
}
</style>