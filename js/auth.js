// ==========================================
// EARNORA - SUPABASE AUTHENTICATION
// ==========================================

// IMPORTANT:
// Replace the two values below with YOUR OWN
// Supabase Project URL and Publishable Key.

const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";

const SUPABASE_PUBLISHABLE_KEY =
    "PASTE_YOUR_PUBLISHABLE_KEY_HERE";


// Create Supabase client
const earnoraSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// SIGN UP
// ==========================================

async function earnoraSignUp(name, email, password) {

    const { data, error } =
        await earnoraSupabase.auth.signUp({

            email: email,
            password: password,

            options: {
                data: {
                    name: name
                }
            }

        });

    if (error) {
        throw error;
    }

    return data;
}


// ==========================================
// LOGIN
// ==========================================

async function earnoraLogin(email, password) {

    const { data, error } =
        await earnoraSupabase.auth.signInWithPassword({

            email: email,
            password: password

        });

    if (error) {
        throw error;
    }

    return data;
}


// ==========================================
// GET CURRENT USER
// ==========================================

async function earnoraGetUser() {

    const {
        data: { user },
        error
    } = await earnoraSupabase.auth.getUser();

    if (error) {
        return null;
    }

    return user;
}


// ==========================================
// LOGOUT
// ==========================================

async function earnoraLogout() {

    const { error } =
        await earnoraSupabase.auth.signOut();

    if (error) {
        throw error;
    }
}
