export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'TangbohuDianPaoZhang',
    avatar: '',
    username: 'tangbohu',
    title: 'owner',
    desc: '没事搞个博客类似物玩玩',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/TangbohuDianPaoZhang' },
    ],
    nameAliases: ['tangbohu'],
    emailAliases: ['jeremy_ren@outlook.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
