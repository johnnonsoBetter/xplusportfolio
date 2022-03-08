import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'
import ProjectList from './ProjectList'
import ProjectListLoader from './ProjectListLoader'
import Empty from '../../../shared/Empty'

export default function ProjectContainer() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const {slug} = useParams()
    const [totalProjects, setTotalProjects] = useState(0)
    const [page, setPage] = useState(0)
    const [totalMembers, setTotalMembers] = useState(0)



    const fetchMoreData = () => {
        
        authAxios.get(`/api/v1/users/${slug}/projects`, {params: {page: page}}).then(res => {
            const {data} = res 
            setProjects(data)
            setPage(page + 1)
            setTotalProjects(projects.length)
       }).catch(err => {
        
           
        
       })
    }



  

    useEffect(() => {   
       

        authAxios.get(`/api/v1/users/${slug}/projects`).then(res => {
            console.log(res)
            setProjects(res.data)
            setLoading(false)
        }).catch(err => {
    
            console.log(err)
            setSomethingWentWrong(true)
        })


        return () => {
            setProjects([])
            setLoading(true)
        }
    }, [])






    return (
        <Box>
           {
               loading ?
               <ProjectListLoader /> :
               <>
                {
                     projects.length === 0 ? 
                     <Empty emptyDetail="No Project Yet" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                     <ProjectList projects={projects} fetchMoreData={fetchMoreData}  />

                }
               
               </>
              

           }
        </Box>
    )
}