import { fail } from '@sveltejs/kit'; 

//post request for
export const actions = {
    default: async ({ locals, request }) =>{
        if (!locals?.user?.roles?.includes('admin'))
        return fail(401, {
            message: 'You are not an admin!'
        });
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get ('message');
        return {
            error_message: 'Email Sent!'
    };
}
}

//test: () =>/{
   // console.log('hit test action');
//}
//};