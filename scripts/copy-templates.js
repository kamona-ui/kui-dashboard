import { cp } from 'fs/promises'
import { join } from 'path'

copy()

async function copy() {
    try {
        await cp(join('templates', 'home', 'dist'), join('dist'), { recursive: true })
        console.log('Home template copied successfully')

        await cp(join('templates', 'html', 'dist'), join('dist', 'html'), { recursive: true })
        console.log('Html template copied successfully')

        await cp(join('templates', 'vue', 'dist'), join('dist', 'vue'), { recursive: true })
        console.log('Vue template copied successfully')

        console.log('All templates copied successfully')
    } catch (err) {
        console.error('Error:', err.message)
    }
}
