export default function RegisterComponent() {
    return (
        <>
        <main>
            <section class="breadcrumb__area box-plr-75">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="breadcrumb__wrapper">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                      <li class="breadcrumb-item active" aria-current="page">Register</li>
                                    </ol>
                                  </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="login-area pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="basic-login">
                                <h3 class="text-center mb-60">Signup From Here</h3>
                                <form action="#">
                                    <label for="name">Username <span>**</span></label>
                                    <input id="name" type="text" placeholder="Enter Username" />
                                    <label for="email-id">Email Address <span>**</span></label>
                                    <input id="email-id" type="text" placeholder="Email address..." />
                                    <label for="pass">Password <span>**</span></label>
                                    <input id="pass" type="password" placeholder="Enter password..." />
                                    <div class="mt-10"></div>
                                    <button class="t-y-btn w-100">Register Now</button>
                                    <div class="or-divide"><span>or</span></div>
                                    <a href="login.html" class="t-y-btn t-y-btn-grey w-100">login Now</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
        </main>

        </>
    )
}