<template>
  <div>
    <b-container>
      <b-row class="px-5 py-3">
        <b-col>
          <div class="mb-2">
            <div class="grey mr-2">Название:</div>
            <b-form-input class="w-auto back" v-model="title"></b-form-input>
          </div>
          <div class="mb-2">
            <div class="grey mr-2">Краткое описание:</div>
            <b-form-textarea class="w-100 back" v-model="shortDescription"></b-form-textarea>
          </div>
          <div class="mb-2">
            <div class="grey mr-2">Полное описание:</div>
            <b-form-textarea class="w-100 back" v-model="description"></b-form-textarea>
          </div>
          <div class="mb-2">
            <div class="grey mr-2">Цена:</div>
            <b-form-input class="w-auto back" v-model="price" type="number"></b-form-input>
          </div>
          <div class="mb-2">
            <div class="grey mr-2">Город:</div>
            <b-form-select v-model="city" :options="cities" class="w-25 back"></b-form-select>
<!--            <b-form-input class="w-auto back" v-model="city"></b-form-input>-->
          </div>
          <div class="mb-2">
            <b-form-group  class="grey" label="Категория:" label-for="tags-component-select">
              <b-form-tags
                  id="tags-component-select"
                  v-model="selected"
                  size="lg"
                  class="mb-2 back"
                  add-on-change
                  no-outer-focus
              >
                <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                      <b-form-tag
                          @remove="removeTag(tag)"
                          :title="tag"
                          :disabled="disabled"
                          variant="info"
                      >{{ tag }}</b-form-tag>
                    </li>
                  </ul>
                  <b-form-select
                      v-bind="inputAttrs"
                      v-on="inputHandlers"
                      :disabled="disabled || availableOptions.length === 0"
                      :options="availableOptions"
                  >
                    <template #first>
                      <option disabled value="" class="grey">Выберете категорию...</option>
                    </template>
                  </b-form-select>
                </template>
              </b-form-tags>
            </b-form-group>
          </div>
          <div class="mb-2">
            <div class="grey mr-2">Изображение:</div>
            <b-form @submit.stop.prevent="onFile">
              <div class="d-flex mb-3">
                <b-form-file multiple v-model="image" placeholder="Выберите картинку..." class="w-auto flex-grow-1"></b-form-file>
                <b-button v-if="hasImage" variant="danger" class="ml-3" @click="clearImage">Очистить выбор</b-button>
              </div>
              <b-img v-if="hasImage" :src="imageSrc" class="mb-3" fluid block rounded></b-img>
            </b-form>
<!--            <b-form-file v-model="file" class="mt-3" plain></b-form-file>-->
          </div>
        </b-col>
      </b-row>
      <b-row class="px-5 py-3">
        <b-col class="d-flex justify-content-end">
          <b-button class="my-button" v-on:click="onSubmit">Создать объявление</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const base64Encode = data =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
export default {
  name: "CreateAdvert",
  data() {
    return {
      title: "",
      shortDescription: "",
      description: "",
      price: 0,
      city: "",
      selected: [],
      image: null,
      imageSrc: null
    }
  },
  methods: {
    onSubmit() {

      console.log(this.image)
      console.log(typeof (this.image))
      this.$store.dispatch(
          'CREATE_ADVERT',
          {params: {title: this.title, shortDescription: this.shortDescription,
              description: this.description, price: this.price, city: this.city, categories: this.selected}}
      ).then((res) => {
        console.log("++++++++++++++++++")
        console.log(this.image)
        const formData = new FormData();
        formData.append("files", this.image)
        this.$store.dispatch("SEND_ATTACHMENT", res.data.id, formData)
        this.onSuccess();
        //this.$router.push({path: "/home/my-adverts"})
      }).catch((err) => {
        console.log(err)
        this.onError(err);
      })
    },
    onError(err) {
      this.$bvToast.toast(`Ошибка: ${err}`, {
        title: 'Login error',
        autoHideDelay: 5000,
        variant: 'danger'
      })
    },
    onSuccess() {
      this.$bvToast.toast("Ваше объявление успешно создано", {
        title: 'Success',
        autoHideDelay: 5000,
        variant: 'success',
        toaster: "b-toaster-top-center"
      })
    },
    // onFile() {
    //   if (!this.image) {
    //     alert("Please select an image.");
    //     return;
    //   }
    //
    //   alert("Form submitted!");
    //
    // },
    clearImage() {
      this.image = null;
    },
  },
  computed: {
    availableOptions() {
      return this.categories.filter(opt => this.selected.indexOf(opt) === -1)
    },
    categories() {
      return this.$store.getters.CATEGORIES_LIST;
    },
    cities() {
      return this.$store.getters.ALL_CITIES;
    },
    hasImage() {
      return !!this.image;
    }
  },
  mounted() {
    if (this.$store.getters.CATEGORIES_LIST.length === 0){
      this.$store.dispatch("GET_CATEGORIES");
    }
    if (this.$store.getters.ALL_CITIES.length === 0){
      this.$store.dispatch("GET_CITIES");
    }
  },
  watch: {
    image(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue) {
          base64Encode(newValue)
              .then(value => {
                this.imageSrc = value;
              })
              .catch(() => {
                this.imageSrc = null;
              });
        } else {
          this.imageSrc = null;
        }
      }
    }
  },
}
</script>

<style scoped>
.back {
  background-color: #E9F8F9;
}
.grey {
  color: #666A6D;
}
.my-button {
  font-weight: bold;
  border-radius: 10px;
  color: #ffffff;
  background-color: #FF5733;
  border: #FF5733 2px solid;
  width: 25%;
  transition-duration: 0.05s;
}
.my-button:hover {
  background: #ff6d00;
  border-color: #ff6d00;
  color: white;
}
</style>


<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],-->
<!--      value: []-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    availableOptions() {-->
<!--      console.log(this.options.filter(opt => this.value.indexOf(opt) === -1))-->
<!--      return this.options.filter(opt => this.value.indexOf(opt) === -1)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->