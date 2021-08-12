import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read';

const event: APIGatewayProxyEvent = {
  queryStringParameters: {
    spaceId: '85a38cbd-4ffd-41c5-af4e-0ae797ed80bb',
  },
} as any;

const result = handler(event, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body);
  console.log(123);
});
