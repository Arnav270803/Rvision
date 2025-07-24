{/*import axios from "axios"
import userModel from "../models/userModel.js"
import  FormData  from "form-data"


export const generateImage= async(req , res) =>{
    try {
        
        const {userId, prompt}= req.body

        const user=await userModel.findById(userId)

        if(!user || !prompt){
            return res.json({success: false, message:'Missing Details'})

        }

        if(user.creditbalance ===0 || user.creditbalance <0){
            return res.json({ success: false, message:'No Credit Balance' , creditbalance: user.creditbalance})
        }

        const formData = new FormData()
        formData.append('prompt' , prompt)

       const {data}= await axios.post('https://clipdrop-api.co/text-to-image/v1', formData,{

            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data,'binary').toString('base64')
        const resultImage= `data:image/png;base64,${base64Image}`

        await userModel.findByIdAndUpdate(user._id, {creditbalance: user.creditbalance -1})

        res.json({success: true, message:'Image Generated', creditbalance: user.creditbalance -1 , resultImage })

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}*/}



// use above code , that was the original code 


import axios from "axios"
import userModel from "../models/userModel.js"
import FormData from "form-data"

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body

    const user = await userModel.findById(userId)

    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' })
    }

    // FIXED: Consistent property reference
    if (user.creditbalance === 0 || user.creditbalance < 0) {
      return res.json({ 
        success: false, 
        message: 'No Credit Balance', 
        creditBalance: user.creditbalance // Fixed naming consistency
      })
    }

    const formData = new FormData()
    formData.append('prompt', prompt)
    
    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API,
        ...formData.getHeaders() // Added proper headers
      },
      responseType: 'arraybuffer'
    })

    const base64Image = Buffer.from(data, 'binary').toString('base64')
    const resultImage = `data:image/png;base64,${base64Image}`

    // Update user credits
    await userModel.findByIdAndUpdate(user._id, { 
      creditbalance: user.creditbalance - 1 
    })

    res.json({ 
      success: true, 
      message: 'Image Generated', 
      creditBalance: user.creditbalance - 1, // Fixed naming
      resultImage 
    })

  } catch (error) {
    console.log('Image generation error:', error.message)
    res.json({ success: false, message: error.message })
  }
}