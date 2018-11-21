const dev = {
  STRIPE_KEY: "pk_test_hgHR0MKVxsmivB2kEyBq28iU",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-128ubbkm30q52"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://w7jkhlanrh.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TH0D7vn2N",
    APP_CLIENT_ID: "7t1f7fc6g612m5t7eef1fsgnnc",
    IDENTITY_POOL_ID: "us-east-1:f85dc1f0-003a-4727-aa69-0e8822806b3c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_hgHR0MKVxsmivB2kEyBq28iU",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ma3233hjzyda"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ny77lveiwf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_b0quNZEsc",
    APP_CLIENT_ID: "6q0e3o0b8ulbnrnmkgk9o64p51",
    IDENTITY_POOL_ID: "us-east-1:0266fafc-5c9f-45ce-8a29-11bde7d48e03"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};