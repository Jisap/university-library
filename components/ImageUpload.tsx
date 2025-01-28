"use client"

import React from 'react'
import { 
  IKImage,
  IKVideo, 
  ImageKitProvider, 
  IKUpload, 
  ImageKitContext 
} from "imagekitio-next";
import config from '@/lib/config';

const {
  env: {
    imagekit: { 
      publicKey, 
      urlEndpoint 
    },
  },
} = config;

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`) // Devuelve los parametros de autenticación
    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };

  } catch (error:any) {
    throw new Error(`Authentication request failed: ${error}`);
  }
}

const ImageUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
    
    </ImageKitProvider>
  )
}

export default ImageUpload