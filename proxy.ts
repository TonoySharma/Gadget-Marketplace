import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'


 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({

        headers: await headers()
  });


// console.log(session);

if(!session || !session?.user){
   return NextResponse.redirect(new URL('/logIn', request.url))
}
 return NextResponse .next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ['/ebooks/:id', '/profile'],
}

