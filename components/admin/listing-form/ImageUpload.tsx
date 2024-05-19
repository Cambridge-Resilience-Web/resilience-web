/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useRef, useState, memo } from 'react'
import Cropper from 'react-easy-crop'
import Image from 'next/legacy/image'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  Button,
  VisuallyHidden,
  chakra,
  Flex,
  Stack,
  Icon,
  Text,
} from '@chakra-ui/react'

import optimizeImage from '@helpers/optimizeImage'
import { getCroppedImg } from './canvasUtils'
import styles from './ImageUpload.module.scss'

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

const ImageUpload = ({
  field,
  form,
  formProps,
  helperText,
  isRequired = false,
  isEditMode,
}: {
  field: any
  form: any
  formProps: any
  helperText?: string
  isRequired?: boolean
  isEditMode: boolean
}) => {
  const fileInputRef = useRef<HTMLInputElement>()
  const [imageBeingCropped, setImageBeingCropped] = useState(null)

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [fileInfo, setFileInfo] = useState<{ name: string; type: string }>()
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  useEffect(() => {
    if (isEditMode && field.value) {
      console.log('useEffect')
      setImageBeingCropped(field.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCropComplete = async (_croppedArea, croppedAreaPixels) => {
    // setCroppedAreaPixels(croppedAreaPixels)
    console.log('onCropComplete', imageBeingCropped, croppedAreaPixels)
    if (isNaN(croppedAreaPixels.width) || isNaN(croppedAreaPixels.height)) {
      return
    }

    try {
      const croppedImage = await getCroppedImg(
        imageBeingCropped,
        croppedAreaPixels,
      )

      const fileNameRegex = new RegExp(/([^\/]+\.*)$/)
      const fileName = imageBeingCropped.match(fileNameRegex)[0]

      const croppedImageFile = new File(
        [croppedImage],
        fileInfo?.name ?? fileName,
        {
          type: fileInfo?.type ?? 'image/png',
        },
      )

      console.log('croppedImageFile', croppedImageFile)

      // const reader = new FileReader()
      // reader.readAsDataURL(croppedImageFile)
      // reader.onloadend = () => {
      //   setImageBeingCropped(reader.result)
      // }

      formProps.setFieldValue('image', croppedImageFile)
    } catch (e) {
      console.error(e)
    }
  }

  const hasImageAlready = Boolean(field.value)

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    setFileInfo({
      name: file.name,
      type: file.type,
    })
    const optimizedBlob = await optimizeImage(file)

    console.log('handleFileInputChange')
    setImageBeingCropped(optimizedBlob)
    formProps.setFieldValue('image', optimizedBlob)
  }

  return (
    <FormControl isInvalid={form.errors.image && form.touched.image} mb="1rem">
      <FormLabel htmlFor="image" fontSize="md" fontWeight="600">
        {`Image${isRequired ? '*' : ''}`}
      </FormLabel>
      <Text fontSize="sm" color="gray.600" mb="0.5rem">
        Please ensure this is either a copyright-free image, you own the
        copyright of this image, or you have permission to use the image.
      </Text>
      {helperText && <FormHelperText mb="1.5rem">{helperText}</FormHelperText>}
      <InputGroup display="flex" alignItems="center" justifyContent="center">
        <VisuallyHidden>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
        </VisuallyHidden>

        {(hasImageAlready || imageBeingCropped) && (
          <div className={styles.cropContainer}>
            <Cropper
              classes={{ containerClassName: styles.cropperContainer }}
              image={imageBeingCropped}
              crop={crop}
              zoom={zoom}
              aspect={6 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        )}

        {/* {field.value && (
          <div style={{ width: '200px', height: '200px' }}>
            <Image
              alt="Preview of image uploaded by user"
              src={preview ?? field.value}
              layout="fill"
              objectFit="contain"
              unoptimized
            />
          </div>
        )} */}
        {!imageBeingCropped && !field.value && (
          <Flex
            width="100%"
            mt={1}
            justify="center"
            p={6}
            borderWidth={2}
            borderColor="gray.300"
            borderStyle="dashed"
            rounded="md"
            cursor="pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <Stack spacing={1} textAlign="center">
              <Icon
                mx="auto"
                boxSize={12}
                color="gray.400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Icon>
              <Flex fontSize="sm" color="gray.600" alignItems="baseline">
                <chakra.label
                  htmlFor="file-upload"
                  cursor="pointer"
                  rounded="md"
                  fontSize="md"
                  color="brand.600"
                  pos="relative"
                  _hover={{
                    color: 'brand.400',
                  }}
                >
                  <span>Upload an image</span>
                  <VisuallyHidden>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      accept="image/"
                    />
                  </VisuallyHidden>
                </chakra.label>
              </Flex>
            </Stack>
          </Flex>
        )}

        {hasImageAlready && (
          <Button
            position="absolute"
            colorScheme="blue"
            size="sm"
            opacity="0.8"
            onClick={() => fileInputRef.current.click()}
          >
            Replace image
          </Button>
        )}
      </InputGroup>
      <FormErrorMessage>Please upload an image</FormErrorMessage>
    </FormControl>
  )
}

export default memo(ImageUpload)
