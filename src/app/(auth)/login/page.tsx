import { SignIn } from '@/app/_components/sign_in_form'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import PageTitle from '@/app/_components/page_title'
import PageLoad from '@/app/_animations/page_load'

export const metadata = {
  title: 'Login | BitEnvious',
  description:
    'Login page | Web development project portfolio - see some of our success stories and let us help you realize your vision. | BitEnvious',
}

export default async function LoginPage() {
  const session = await auth()
  if (session?.user) redirect("/")

  const pageTitleContent = {
    Title: 'Login',
    Description: '',
  }

  return (
    <main>
      <PageTitle
        pageTitleContent={pageTitleContent}
        headingClassNames="bg-gradient-to-r from-lime-600 to-lime-500 bg-clip-text text-transparent"
      />
      <PageLoad offset={50}>
        <div className="flex min-h-[50vh] p-10">
          <div className="m-auto">
            <SignIn />
          </div>
        </div>
      </PageLoad>
    </main>
  )
}
