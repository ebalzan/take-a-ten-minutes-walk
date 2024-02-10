function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false
  }

  const count: any = {}

  walk.forEach((letter: string) => {
    if (count[letter]) {
      count[letter]++
    } else {
      count[letter] = 0
    }
  })

  if (count['n'] !== count['s']) {
    return false
  }

  if (count['w'] !== count['e']) {
    return false
  }

  return true
}
