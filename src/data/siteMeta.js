
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
import logoBedford from '@/images/logos/Bedford.svg'   
const siteMeta = {
    title: "Lennon Ruthven",
    description: "Lennon Ruthven",
    copyright: "Lennon Ruthven",
    author: {
        name: "Lennon Ruthven",
        email: "lennonruthven@outlook.com",
        twitter: "https://twitter.com/lennonruthven",
        mastodon: "https://tty0.social/@bketelsen",
        instagram: "https://instagram.com/lennonruthven",
        github: "https://github.com.com/bketelsen",
        linkedin: "https://www.linkedin.com/in/lennon-ruthven-9238371b3/",
        twitch: "https://twitch.tv/",
        youtube: "https://youtube.com/",
    },
    siteUrl: "lennonruthven.me"
}
 export const resume = [
    {
      company: 'Tresham College',
      title: 'L2 ED in Health and Social Care: A*',
      logo: logoBedford,
      start: '2021',
      end: {
        label: '2022',
        dateTime: new Date().getFullYear(),
      },
    },
  ]
export const projects = [
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;