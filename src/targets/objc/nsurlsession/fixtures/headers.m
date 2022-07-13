#import <Foundation/Foundation.h>

<<<<<<< HEAD:__tests__/__fixtures__/output/objc/nsurlsession/headers.m
NSDictionary *headers = @{ @"accept": @"text/json",
=======
NSDictionary *headers = @{ @"accept": @"application/json",
>>>>>>> upstream/master:src/targets/objc/nsurlsession/fixtures/headers.m
                           @"x-foo": @"Bar",
                           @"x-bar": @"Foo" };

NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://httpbin.org/headers"]
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy
                                                   timeoutInterval:10.0];
[request setHTTPMethod:@"GET"];
[request setAllHTTPHeaderFields:headers];

NSURLSession *session = [NSURLSession sharedSession];
NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                                                if (error) {
                                                    NSLog(@"%@", error);
                                                } else {
                                                    NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
                                                    NSLog(@"%@", httpResponse);
                                                }
                                            }];
[dataTask resume];