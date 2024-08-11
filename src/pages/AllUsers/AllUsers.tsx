
import user1 from '../../assets/images/user1.png'
import user3 from '../../assets/images/user3.png'
import user2 from '../../assets/images/user2.png'
import user4 from '../../assets/images/user4.png'
import { IUserData } from '../../utils/interface'
import UserCardContainer from '../../components/AllUsers/UserCardContainer'
const data: IUserData[] = [
    {
        id: 0,
        name: 'Jon Doe',
        email: 'jondoe123@gmail.com',
        img: user1
    },
    {
        id: 2,
        name: 'User Name',
        email: 'jondoe123@gmail.com',
        img: user2
    },
    {
        id: 3,
        name: 'Jos Doe',
        email: 'jondoe123@gmail.com',
        img: user3
    },
    {
        id: 4,
        name: 'Star Dublin',
        email: 'jondoe123@gmail.com',
        img: user4
    },
    {
        id: 5,
        name: 'Jon Doe',
        email: 'jondoe123@gmail.com',
        img: user2
    },
    {
        id: 6,
        name: 'User Name',
        email: 'jondoe123@gmail.com',
        img: user3
    },
    {
        id: 7,
        name: 'Jos Doe',
        email: 'jondoe123@gmail.com',
        img: user4
    },
    {
        id: 8,
        name: 'Star Dublin',
        email: 'jondoe123@gmail.com',
        img: user1
    },

]

const AllUsers = () => {
    return (
        <main>
            <section className="flex justify-between items-center py-10 px-10">
                <h3 className="text-[16px] font-semibold text-primary">User list</h3>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </section>
            <section className='flex flex-row flex-wrap gap-5 items-center justify-center p-5'>
                {
                    data?.map((info: IUserData, i: number) => <UserCardContainer userData={info} key={i} />)
                }
            </section>
        </main>
    );
}

export default AllUsers;