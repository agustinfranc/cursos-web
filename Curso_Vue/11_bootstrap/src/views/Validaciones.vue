 <template>
  <div class="container mt-5">
    <h1>Vuelidate</h1>

    <form @submit.prevent="submit">
      <input
        type="email"
        placeholder="Ingresa un email"
        class="form-control my-3"
        v-model.lazy="$v.email.$model"
        :class="{ 'is-invalid': $v.email.$error }"
      />
      <p class="text-danger" v-if="$v.email.error">Debe ingresar un email valido</p>
      <p class="text-danger" v-if="!$v.email.required">Email requerido</p>
      <!-- <p>{{ $v.email }}</p> -->

      <input
        type="password"
        placeholder="Ingrese contraseña"
        class="form-control my-3"
        v-model.lazy="$v.password.$model"
        :class="{ 'is-invalid': $v.password.$error }"
      />
      <p class="text-danger" v-if="!$v.password.minLength">Minimo 6 caracteres</p>
      <!-- <p>{{ $v.password }}</p> -->

      <input
        type="password"
        placeholder="Repita contraseña"
        class="form-control my-3"
        v-model.lazy="$v.repeatPassword.$model"
        :class="{ 'is-invalid': $v.repeatPassword.$error }"
      />
      <p
        class="text-danger"
        v-if="!$v.repeatPassword.sameAsPassword"
      >Las contraseñas tienen que coincidir</p>
      <!-- <p>{{ $v.repeatPassword }}</p> -->

      <b-button type="submit" variant="primary" :disabled="$v.$invalid">Enviar</b-button>

      <p>{{ $v.invalid }}</p>
    </form>
  </div>
</template>

<script>
import { email, required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  name: "validaciones",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
      submit() {
          this.$v.touch()
          if (this.$v.invalid) {
              // this.submitStatus = 'ERROR'
          } else {

          }
      }
  }
};
</script>